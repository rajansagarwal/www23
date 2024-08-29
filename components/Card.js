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
        display: "block",
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
          transition: "opacity 0.2s ease",
          opacity: hovered ? 0.4 : 1,
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
        {hovered && <p>{description}</p>}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0.5rem",
        }}
      >
        <p className="text-white font-bricolage-grotesque h-full w-full px-1 bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-40 saturate-50 backdrop-contrast-100 rounded-sm">
          {name}
        </p>
      </div>
    </Link>
  );
}
