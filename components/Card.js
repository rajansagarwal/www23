import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Card({ name, description, tag, image, link }) {
  const [hovered, setHovered] = useState(false);
  if (!description) {
    description = "rajan";
  }
  return (
    <Link
      style={{
        width: "100%",
        maxHeight: "23.5rem",
        position: "relative",
        cursor: "pointer",
        display: "block", // Make sure the Link is block level to contain the absolutely positioned elements
      }}
      href={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        width={500}
        height={300}
        style={{
          height: "100%",
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: "5px",
          objectPosition: "center",
          transition: "opacity 0.5s ease",
          opacity: hovered ? 0.5 : 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0.5rem",
          width: "95%",
          color: "white",
          padding: "1rem",
          borderRadius: "5px",
          display: hovered ? "block" : "none",
        }}
      >
        {hovered && (
          <Typewriter
            words={description.split()}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={10}
            deleteSpeed={500}
            delaySpeed={1000}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0.5rem",
        }}
      >
        <p className="text-white font-bricolage-grotesque h-full w-full px-1 bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-30 saturate-50 backdrop-contrast-100 rounded-sm">
          {name}
        </p>
      </div>
    </Link>
  );
}
