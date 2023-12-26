import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = () => {
  const innerRef = useRef(null);

  const containerWidth = 400 * 5 + 40 * 4;
  const containerHeight = 350 * 5 + 40 * 4;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 300;
    const y = (e.clientY / window.innerHeight - 0.5) * 300;
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
      const { scrollWidth, clientWidth, scrollHeight, clientHeight } = innerRef.current;
      const maxTranslateX = Math.max(0, scrollWidth - clientWidth);
      const maxTranslateY = Math.max(0, scrollHeight - clientHeight);
      const translateX = -((maxTranslateX * mousePosition.x) / containerWidth);
      const translateY = -((maxTranslateY * mousePosition.y) / containerHeight);
      innerRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mousePosition, containerWidth, containerHeight]);

  return (
    <OuterContainer onMouseMove={handleMouseMove}>
      <InnerContainer translateX={mousePosition.x} translateY={mousePosition.y} ref={innerRef}>
        {Array.from({ length: 25 }).map((_, index) => (
          <Image key={index} src={`shapeshift-dash.png`} width={400} height={350} alt={`image`} />
        ))}
      </InnerContainer>
    </OuterContainer>
  );
};

const Explore = () => <ImageContainer />;

export default Explore;
