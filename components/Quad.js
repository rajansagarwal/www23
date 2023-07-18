import { Grid } from "@geist-ui/react";
import Image from "next/image";
import ImageCard from "./ImageCard";
import ReactMarkdown from "react-markdown";

export default function Quad({ name, description, tag, image, link }) {
  return (
    <>
      <Grid
        className="blurbottom x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
        style={{
          height: "35em",
          width: "52em",
          overflow: "hidden",
          position: "relative",
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
            width={1000}
            height={1000}
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
      <div className="x-desktop">
        <ImageCard name={name} description={description} image={image} />
      </div>
    </>
  );
}
