import Image from "next/image";
import { Grid, Tabs, Text } from "@geist-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Articles({
  name,
  description,
  image,
  date,
  tag,
  link,
}) {
  const [articles, setArticles] = useState([]);

  // Fetch articles from the API on component mount
  useEffect(() => {
    async function fetchArticles() {
      // Use the relative path to your API route
      const res = await fetch("/api/articles");
      const data = await res.json();
      const recentArticles = data.userSaved.slice(0, 5);
      setArticles(recentArticles);
    }

    fetchArticles();
  }, []);

  console.log(articles);

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
          Recent Articles
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
            display: 'flex',
            flexDirection: "column",
            gap: '0.5rem'
          }}
          suppressHydrationWarning
        >
          {articles.map((article) => (
            <a href={article.link} key={article.id} className="text-neutral-400 cursor-pointer">
              {article.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
