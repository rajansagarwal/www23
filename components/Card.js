import { Grid } from "@geist-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import FullVideo from "./FullVideo";
import Link from "next/link"

export default function Card({
  name,
  description,
  tag,
  image,
  link,
}) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Link
      style={{
        width: "100%",
        maxHeight: "23.5rem",
        // paddingBottom: "2rem",
        position: "relative",
        cursor: "pointer",
      }}
      // onClick={() => window.open(link)}
      href={link}
      className="small-big"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        width={500}
        height={300}
        className="rounded-lg"
        style={{
          height: "100%",
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          objectPosition: "center",
          opacity: hovered ? 1 : 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0.5rem",
        }}
      >
        <p className="text-white font-bricolage-grotesque h-full w-full px-1 bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-30 saturate-50 backdrop-contrast-100 rounded-sm">
          <span>{name}</span>
        </p>
      </div>
    </Link>
  );
}
