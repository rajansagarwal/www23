import { useState } from "react";

export default function FullVideo({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="video-container"
      style={{
        width: "100%",
        maxHeight: "30rem",
        // paddingBottom: "2rem",
        position: "relative",
        cursor: "pointer",
        // paddingBottom: "2rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        src={video}
        width={500}
        height={500}
        autoPlay
        loop
        muted
        className="rounded-lg"
        style={{
          height: "100%",
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}
