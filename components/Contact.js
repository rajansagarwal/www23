import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";

export default function Contact({ name, description, image, date, tag, link }) {
  return (
    <Grid
      className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out"
      style={{
        height: "20em",
        width: "25em",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
          <div className="bg-blue-400/40 text-blue-300 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-xs tracking-tight shadow-inset-skeuo">
            <span>GET IN TOUCH</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif-variation mt-3 mb-5 font-serif text-xl text-white font-light md:text-2xl lg:text-3xl">
            Contact Me!
          </h3>
          <p
            className="text-neutral-400 text-sm line-clamp-1"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 7,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
              maxHeight: "12.6em",
              lineHeight: "1.8em",
            }}
          >
            <span>
              Find me on{" "}
              <a
                href="https://twitter.com/_rajanagarwal"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                href="https://www.github.com/rajanwastaken"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              . Or, preferably, let&#39;s book a call! Over the next year, I
              will be in Toronto, SF and NYC — let&#39;s meet up! I&#39;m always
              open to new opportunities, in work and in life.
            </span>
          </p>
        </div>
      </div>
    </Grid>
  );
}
