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
          {tag === "Shapeshift" ? (
            <iframe
              src="https://www.loom.com/embed/894f18b385ad4c82a700efb10252c826?sid=3da07ddc-889b-41f9-a200-95ed7fe710f9gl?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"
              frameborder="0"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/Vmupugz2M1s?si=6UAs96zcZfRVgryd&autoplay=1&start=120&mute=1&loop=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          )}
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
