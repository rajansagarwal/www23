import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";
import Link from "next/link";

export default function TextCard({
  name,
  description
}) {
  return (
    <div
      className="aspect-[1] font-bricolage-grotesque bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out"
      style={{
        width: "100%",
        maxHeight: "23.5rem",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div className="p-7">
        <h3 className="font-serif-variation mt-3 mb-5 font-bricolage-grotesque text-4xl text-white font-normal md:text-3xl lg:text-4xl">
          {name}
        </h3>
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
          {description}
        </div>
      </div>
    </div>
  );
}
