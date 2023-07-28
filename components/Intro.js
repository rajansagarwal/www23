import { Grid, Tabs, Text } from "@geist-ui/react";
import { ArrowUpRight } from "@geist-ui/icons";
import Link from "next/link";

export default function Intro({ name, description, image, link }) {
  return (
    <Grid
      className="aspect-[1] rounded-md transition-colors duration-300 ease-in-out cursor-pointer flex justify-between"
      style={{
        height: "14em",
        width: "79em",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="px-1">
          <h3 className="font-serif-variation mt-3 mb-5 font-serif text-3xl text-white font-normal md:text-2xl lg:text-3xl">
            rajan agarwal{" "}
            <span className="text-neutral-400 fade-in-2">
              is exploring the{" "}
            </span>
            <br className="x-mobile" />
            <span className="text-neutral-400 fade-in-2-semi">
              interplay between
            </span>{" "}
            <span className="font-serif fade-in-2-mid">design</span>{" "}
            <span className="text-neutral-400 fade-in-2-mid">and</span>{" "}
            <span className="font-serif fade-in-2-mid">engineering.</span>
          </h3>
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
            Currently Building Shapeshift. Prev Arterial, Hack Club, Camp
            Social. <br />
            Looking for Work Summer 2024.
          </p>
        </div>
      </div>

      <div className="x-mobile flex h-full w-full flex-col justify-between text-right fade-in-3-mid">
        <div className="px-1 flex flex-col gap-2">
          <Link
            href="/resume.pdf"
            className="text-neutral-500 line-clamp-1 text-sm hover:text-neutral-200"
          >
            Resume
          </Link>
          <a
            href="https://twitter.com/_rajanagarwal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200 text-neutral-500 line-clamp-1 text-sm"
          >
            Twitter
          </a>
          <a
            href="https://github.com/rajanwastaken"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200 text-neutral-500 line-clamp-1 text-sm"
          >
            Github
          </a>
        </div>
      </div>
    </Grid>
  );
}
