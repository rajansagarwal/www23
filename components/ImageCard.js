import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";
import ReactMarkdown from "react-markdown";

export default function ImageCard({ name, description, image, link }) {
  return (
    <Grid
      className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
      style={{
        height: "20em",
        width: "25em",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="pl-5">
          <h4 className="font-serif-variation mt-3 mb-3 font-serif text-2xl text-white font-light md:text-2xl lg:text-3xl">
            {name}
          </h4>
          <p
            className="text-neutral-400 text-sm line-clamp-1"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
              maxHeight: "3.6em",
              lineHeight: "1.8em",
            }}
          >
            {description}
          </p>
        </div>
        <Image
          src={image}
          width={500}
          height={500}
          className="rounded-sm"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            maxHeight: "200px",
          }}
        />
      </div>
    </Grid>
  );
}
