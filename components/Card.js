import { Grid, Tabs, Text } from "@geist-ui/react";
import { ArrowUpRight } from "@geist-ui/icons";

export default function Card({ name, description, image, link }) {
  return (
    <Grid
      className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
      style={{
        height: "16.5em",
        width: "25em",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between p-3 text-sm tracking-tight text-neutral-400">
          <div className="bg-emerald-400/40 text-emerald-300 inline-block rounded px-1.5 pt-0.5 pb-1 font-serif text-xs tracking-tight shadow-inset-skeuo">
            <span>AI FOR HUMANITY</span>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-serif-variation mt-3 mb-5 font-serif text-3xl text-white font-light md:text-4xl lg:text-5xl">
            Rajan Agarwal
          </h3>
          <p className="text-neutral-400 text-sm">
            <a
              className="text-neutral-300"
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
          <p className="text-neutral-500 line-clamp-1 text-sm">
            Currently Building Shapeshift. Prev Arterial, Hack Club, Camp
            Social. Available for Work Summ.
          </p>
        </div>
      </div>
    </Grid>
  );
}
