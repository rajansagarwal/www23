import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Stats({ name, description, image, date, tag, link }) {
  const [articles, setArticles] = useState([]);

  return (
    <div
      className="aspect-[1] font-bricolage-grotesque bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out"
      style={{
        width: "100%",
        maxHeight: "23.5rem",
        position: "relative",
      }}
    >
      <div className="p-7">
        <h3 className="font-serif-variation mt-3 mb-8 font-bricolage-grotesque text-4xl text-white font-normal md:text-3xl lg:text-4xl">
          In the past year,
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
            lineHeight: "1.8em",
            display: "flex",
            flexDirection: "column",
          }}
          suppressHydrationWarning
        >
          Lines of Code Written:
          <ul className="text-neutral-400">
            <li>Python: 20730 lines</li>
            <li>Javascript/Typescript: 12328 lines</li>
            <li>Ruby: 850 lines</li>
            <li>C/C++: 2415 lines</li>
            <li>Jupyter Notebook: 4361 lines</li>
            <li>Solidity: 554 lines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
