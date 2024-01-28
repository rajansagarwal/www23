import { Grid, Tabs, Text } from "@geist-ui/react";
import { ArrowUpRight } from "@geist-ui/icons";
import Link from "next/link";

export default function Intro({ name, description, image, link }) {
  return (
    <Grid
      className="aspect-[1] rounded-md transition-colors duration-300 ease-in-out cursor-pointer flex justify-between"
      style={{
        height: "11em",
        width: "100em",
        padding: "0 1rem"
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="px-1">
          <h2 className="mt-3 mb-5 text-4xl text-white md:text-3xl lg:text-4xl">
            rajan agarwal
          </h2>
          <p className="text-neutral-400 text-sm">
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
          <p className="text-neutral-500 line-clamp-1 text-sm fade-in-3-mid">
            Currently Building Portal. <br />
            Prev Software Engineer Shapeshift, Arterial, Hack Club, Camp Social.{" "}
            <br />
            Looking for Work Summer 2024.
          </p>
        </div>
      </div>

      <div className="x-mobile flex h-full w-full flex-col justify-between text-right fade-in-3-mid">
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
    </Grid>
  );
}
