"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Grid, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import Intro from "@/components/Intro";
import Card from "@/components/Card";
import TextCard from "@/components/TextCard";
import Articles from "@/components/Articles";
import Stats from "@/components/Stats";
import Title from "@/components/Title";
const FullImage = dynamic(() => import("@/components/FullImage"));
const FullVideo = dynamic(() => import("@/components/FullVideo"));
import Double from "@/components/Double";
import Large from "@/components/Large";
import { ArrowRight } from "@geist-ui/icons";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setLoading(false);
  //   }, []);
  return (
    <main
      style={{
        padding: "2rem 2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>
          Rajan Agarwal
        </title>
        <meta
          name="description"
          content="Rajan Agarwal is an 18-year-old Software Engineer studying at the University of Waterloo. Explore his work on Shapeshift, a due-diligence optimization platform for earthquake-resistant buildings. Check out his experience at Arterial, Camp Social, and Hack Club. Rajan is seeking work opportunities for Summer 2024."
        />
        <meta
          name="keywords"
          content="Rajan Agarwal, Software Engineer, University of Waterloo, Shapeshift, earthquake-resistant buildings, Arterial, Camp Social, Hack Club, Summer 2024 jobs, Rajan, Agarwal, Toronto, Portal, Wearable, Tab"
        />
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/160/apple/81/seedling_1f331.png"
        />
      </Head>
      <div
        styles={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="pb-10">
          <h2 className="font-serif-variation mt-3 mb-5 font-bricolage-grotesque text-4xl text-white font-normal">
            Rajan Agarwal
          </h2>
          <p className="text-neutral-400 text-lg font-bricolage-grotesque w-[100%] max-w-[500px]">
            AI for systems, both digital and embedded, to better understand and
            interact with our digital and physical world.
          </p>
          <p className="text-neutral-400 text-sm font-bricolage-grotesque">
            <a
              className="text-neutral-300 fade-in-3"
              href="https://se-webring.xyz/"
              rel="noreferrer"
              target="_blank"
            >
              Software Engineering @ Waterloo.
            </a>
            <br />
            Train Automation @ Hitachi Rail. World Modelling @ Watonomous
          </p>
        </div>
        <div>
            <h3 className="text-lg font-bricolage-grotesque">2024</h3>
            <div className="mt-2">
                <p className="text-md">Automating Trains & Signal Processing</p>
                <p className="text-md">Automating Trains & Signal Processing</p>
            </div>
        </div>
      </div>
    </main>
  );
}
