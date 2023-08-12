import Image from "next/image";
import Link from "next/link";
import { Grid, Tabs, Text } from "@geist-ui/react";

export default function FullImage({ name, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Grid
        className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer relative"
        style={{
          height: "20em",
          width: "25em",
        }}
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
        </div>
      </Grid>
    </a>
  );
}
