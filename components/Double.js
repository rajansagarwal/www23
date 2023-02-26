import { Grid } from "@geist-ui/react";
import Image from "next/image";
import ImageCard from "./ImageCard";

export default function Double({ name, description, tag, image, link }) {
  return (
    <>
      <Grid
        className="x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
        style={{
          height: "20em",
          width: "52em",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="flex">
          <div
            className="flex h-full w-full flex-col justify-between"
            style={{
              flexBasis: "50%",
            }}
          >
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <div className="bg-rose-400/40 text-rose-300 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-xs tracking-tight shadow-inset-skeuo">
                <span>{tag.toUpperCase()}</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-serif-variation mt-3 mb-5 font-serif text-3xl text-white font-light md:text-4xl lg:text-4xl">
                {name}
              </h4>
              <p
                className="text-neutral-400 text-sm line-clamp-1"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  wordWrap: "break-word",
                  maxHeight: "7.2em",
                  lineHeight: "1.8em",
                }}
              >
                <span>{description}</span>
              </p>
            </div>
          </div>
          <div
            style={{
              flexBasis: "50%",
              position: "relative",
              objectFit: "left",
              bottom: -50,
              right: -50,
            }}
          >
            <Image
              src={image}
              width={500}
              height={500}
              className="rounded-md"
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
                objectPosition: "left",
              }}
            />
          </div>
        </div>
      </Grid>
      <div className="x-desktop">
        <ImageCard name={name} description={description} image={image} />
      </div>
    </>
  );
}
