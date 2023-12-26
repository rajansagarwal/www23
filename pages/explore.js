import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: max-content;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 40px;
  padding: 20px;
  box-sizing: border-box;
  transform: translate(${(props) => props.translateX}px, ${(props) => props.translateY}px);
  transition: transform 0.3s ease;
`;

const Image = styled.img`
  width: 400px;
  height: 350px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageContainer = () => {
    const innerRef = useRef(null);
  
    const containerWidth = 400 * 5 + 40 * 4;
    const containerHeight = 350 * 5 + 40 * 4;
    let initialX = 0;
    let initialY = 0;
  
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const documentWidth = document.documentElement.clientWidth;
      const documentHeight = document.documentElement.clientHeight;
  
      const hasVerticalScrollbar = documentWidth > windowWidth;
      const hasHorizontalScrollbar = documentHeight > windowHeight;
  
      const scrollbarWidth = hasVerticalScrollbar ? windowWidth - documentWidth : 0;
      const scrollbarHeight = hasHorizontalScrollbar ? windowHeight - documentHeight : 0;
  
      initialX = (windowWidth - containerWidth - scrollbarWidth) / 2;
      initialY = (windowHeight - containerHeight - scrollbarHeight) / 2;
    }
  
    const [mousePosition, setMousePosition] = useState({ x: initialX, y: initialY });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 400;
    const y = (e.clientY / window.innerHeight) * 300;
    setMousePosition({ x, y });
    localStorage.setItem("mousePosition", JSON.stringify({ x, y }));
  };

  useEffect(() => {
    const storedPosition = localStorage.getItem("mousePosition");
    if (storedPosition) {
      const { x, y } = JSON.parse(storedPosition);
      setMousePosition({ x, y });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = innerRef.current;
      const images = innerRef.current.querySelectorAll('img');
      
      images.forEach((image, index) => {
        const x = (index % 5); // Adjusted width + smaller gap
        const y = Math.floor(index / 5); // Adjusted height + smaller gap
        image.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial positioning
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <OuterContainer onMouseMove={handleMouseMove}>
      <InnerContainer translateX={-mousePosition.x} translateY={-mousePosition.y} ref={innerRef}>
        {Array.from({ length: 25 }).map((_, index) => (
          <Image key={index} src={`shapeshift-dash.png`} width={400} height={350} alt={`image`} />
        ))}
      </InnerContainer>
    </OuterContainer>
  );
};

const Explore = () => <ImageContainer />;

export default Explore;
