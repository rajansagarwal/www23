import { Grid } from "@geist-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Quad({ name, description, tag, image, video, link }) {
  return (
    <>
      <Grid
        className="blurbottom x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
        style={{
          height: "30em",
          width: "52em",
          overflow: "hidden",
          position: "relative",
        }}
      >
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
        <div
          className="rounded-sm"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            src="https://www.loom.com/embed/622d0ab2bc35442e8a41577a910259c8?sid=161ad09d-7cef-4d51-8999-7fdad0d2380f?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"
            frameborder="0"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
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
            <Image
              height={1000}
              width={1000}
              unoptimized={true}
              src={video}
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
