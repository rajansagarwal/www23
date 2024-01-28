import { Grid } from "@geist-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@geist-ui/icons";
import FullVideo from "./FullVideo";
import ReactMarkdown from "react-markdown";

export default function Title({
  name,
  description,
  tag,
  image,
  link,
  video,
  stack,
}) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="font-bricolage-grotesque small-big pb-lg"
      style={{
        width: "100%",
        height: "28rem",
        maxHeight: "28rem",
        borderRadius: "0.7rem",
        position: "relative",
        color: "white",
        background: "rgba(255, 255, 255, 0.1)",
      }}
    >
        <div
        className="px-1"
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          maxWidth: "100%",
        }}
      >
        <div className="px-1 flex flex-row gap-2">
          <a
            href="https://twitter.com/_rajanagarwal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200 text-neutral-500 line-clamp-1 text-sm"
          >
            Twitter
          </a>
          <a
            href="https://github.com/rajansagarwal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200 text-neutral-500 line-clamp-1 text-sm"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/rajansagarwal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200 text-neutral-500 line-clamp-1 text-sm"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div
        className="px-1"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "2rem",
          maxWidth: "100%",
        }}
      >
        <h2 className="font-serif-variation mt-3 mb-5 font-bricolage-grotesque text-4xl text-white font-normal md:text-3xl lg:text-4xl">
          Rajan Agarwal
        </h2>
        <p className="text-neutral-400 text-sm font-bricolage-grotesque">
          <a
            className="text-neutral-300 fade-in-3"
            href="https://se-webring.xyz/"
            rel="noreferrer"
            target="_blank"
            style={{
              display: "flex",
            }}
          >
            Software Engineer @ University of Waterloo{" "}
            <span>
              <ArrowUpRight size={10} />
            </span>{" "}
          </a>
        </p>
        <p className="text-neutral-500 line-clamp-1 text-sm fade-in-3-mid font-bricolage-grotesque">
          Currently Building Portal.
          <br />
          Looking for Work Summer 2024.
        </p>
      </div>
    </div>
  );
}
