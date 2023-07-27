import { Grid } from "@geist-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Quad({ name, description, tag, image, video, link }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
      return () => {
        videoRef.current.removeEventListener("loadeddata", handleVideoLoaded);
      };
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
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
        {videoLoaded ? null : (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "#000",
            }}
          />
        )}
        <video
          autoPlay
          muted
          loop
          playsInline
          src={video}
          className={`rounded-sm ${videoLoaded ? "visible" : "invisible"}`}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          ref={videoRef}
        />
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
            {videoLoaded ? null : (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#000",
                }}
              />
            )}
            <video
              autoPlay
              muted
              loop
              src={video}
              className={`rounded-sm ${videoLoaded ? "visible" : "invisible"}`}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
              ref={videoRef}
            />
          </div>
        </Grid>
      </div>
    </>
  );
}
