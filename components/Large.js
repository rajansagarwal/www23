import { Grid } from "@geist-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Large({ name, description, tag, image, video, link }) {
  return (
    <>
      <Grid
        className="blurbottom x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
        style={{
          height: "33em",
          width: "100%", // Adjusted width property
          maxWidth: "90vw",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="rounded-sm"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "85%",
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
              src="https://www.youtube.com/embed/Vmupugz2M1s?si=6UAs96zcZfRVgryd&autoplay=1&start=120&mute=1&loop=1&playlist=Vmupugz2M1s"
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
        <div className="px-5">
          <div
            className="text-neutral-400 text-sm line-clamp-1"
            suppressHydrationWarning
          >
            {tag === "Portal" ? (
              <>
                <p
                  className="text-neutral-400 text-lg"
                  suppressHydrationWarning
                >
                  <b className="font-bold font-mono">Portal</b> is a wearable AI
                  that enables you to relive memories, through video, audio, location and
                  context.
                </p>
              </>
            ) : (
              <>
                <p
                  className="text-neutral-400 text-lg"
                  suppressHydrationWarning
                >
                  <b className="font-bold font-mono">Shapeshift</b> is a
                  cutting-edge optimization platform that
                  streamlines the construction of earthquake-resistant
                  buildings.
                </p>
              </>
            )}
          </div>
        </div>
      </Grid>
      <div className="x-desktop">
        <Grid
          className={`aspect-[1] bg-zinc-900 rounded-md transition-colors duration-300 ease-in-out cursor-pointer relative`}
          style={{
            height: "15em",
            width: "23em",
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
            <iframe
              src={tag === "Portal" ? "https://www.youtube.com/embed/Vmupugz2M1s?si=6UAs96zcZfRVgryd&autoplay=1&start=120&mute=1&loop=1&playlist=Vmupugz2M1s" : "https://www.loom.com/embed/894f18b385ad4c82a700efb10252c826?sid=3da07ddc-889b-41f9-a200-95ed7fe710f9gl?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"}
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
          </div>
        </Grid>
      </div>
    </>
  );
}
