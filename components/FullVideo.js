import Image from "next/image";
import { useState } from "react";
import { Grid, Tabs, Text } from "@geist-ui/react";

export default function FullVideo({ name, description, image, video, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid
      className={`aspect-[1] bg-zinc-900 rounded-md ${
        hovered ? "bg-zinc-800" : ""
      } transition-colors duration-300 ease-in-out cursor-pointer relative`}
      style={{
        height: "20em",
        width: "25em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "1rem",
          }}
        >
          <p className="text-neutral-400 text-sm bg-zinc-800 bg-opacity-80 px-4 rounded-sm">
            <span>{name}</span>
          </p>
        </div>
        {hovered ? (
          <video
            autoPlay
            muted
            loop
            src={video}
            className="rounded-sm"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <Image
            src={image}
            width={500}
            height={500}
            className="rounded-sm"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>
    </Grid>
  );
}
