import { Grid } from "@geist-ui/react";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Quad({ name, description, tag, image, video, link }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoReady = () => {
    // Now that the video is ready to play, hide the image
    setVideoLoaded(false);
  };

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
          {/* Show the image when the video is not loaded */}
          {!videoLoaded && (
            <Image
              src={image}
              width={700}
              height={700}
              alt={name}
              onLoad={handleVideoLoad}
              className="rounded-sm"
            />
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src={video}
            className={`rounded-sm ${videoLoaded ? "" : "hidden"}`}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
            onLoadedData={handleVideoReady}
          />
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