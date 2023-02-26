import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";
import ReactMarkdown from "react-markdown";

export default function TextCard({
  name,
  description,
  image,
  date,
  tag,
  link,
}) {
  return (
    <Grid
      className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
      style={{
        height: "20em",
        width: "25em",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
          <div className="bg-blue-400/40 text-blue-300 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-xs tracking-tight shadow-inset-skeuo">
            <span>{tag}</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif-variation mt-3 mb-5 font-serif text-xl text-white font-light md:text-2xl lg:text-3xl">
            {name}
          </h3>
          {date ? (
            <>
              <p className="text-neutral-400 text-sm">
                <span>{date}</span>
              </p>
            </>
          ) : null}
          <div
            className="text-neutral-400 text-sm line-clamp-1"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
              maxHeight: "9.0em",
              lineHeight: "1.8em",
            }}
            suppressHydrationWarning
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Grid>
  );
}
