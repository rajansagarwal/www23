import { Grid } from "@geist-ui/react";
import Image from "next/image";
import FullVideo from "./FullVideo";
import ReactMarkdown from "react-markdown";

export default function Double({
  name,
  description,
  tag,
  image,
  link,
  video,
  stack,
}) {
  return (
    <>
      <Grid
        className="blurbottom x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
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
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  wordWrap: "break-word",
                  maxHeight: "11.8em",
                  lineHeight: "1.8em",
                }}
              >
                {description}
              </p>
            </div>
          </div>
          <div
            style={{
              flexBasis: "50%",
              position: "relative",
              objectFit: "left",
              bottom: -50,
              right: -30,
            }}
          >
            {video ? (
              <video
                autoPlay
                muted
                loop
                src={image}
                className="rounded-lg"
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
                className="rounded-lg"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                  objectPosition: "left",
                }}
              />
            )}
          </div>
        </div>
      </Grid>
      <div className="x-desktop">
        <Grid
          className={`aspect-[1] bg-zinc-900 rounded-md transition-colors duration-300 ease-in-out cursor-pointer relative`}
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
            <video
              autoPlay
              muted
              loop
              src={image}
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
      </div>
    </>
  );
}

{
  /* 

<div className="flex gap-2">
                {stack.map((item, index) => (
                  <Image
                    key={index}
                    alt={item}
                    src={`https://abrudz.github.io/logos/${item}.svg`}
                    width={20}
                    height={20}
                    className="rounded-lg"
                    style={{
                      height: "20px",
                      objectFit: "cover",
                      width: "20px",
                      objectPosition: "left",
                      WebkitFilter: "grayscale(100%)",
                      filter: "grayscale(100%)",
                    }}
                  />
                ))}
              </div>
*/
}
