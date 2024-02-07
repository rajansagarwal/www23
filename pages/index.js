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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main
      style={{
        padding: "2rem 2rem",
      }}
    >
      <Head>
        <title>
          Rajan Agarwal - Software Engineer | University of Waterloo
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
      {loading ? (
        <div
          style={{
            background: "black",
          }}
        >
          Rajan Agarwal
        </div>
      ) : (
        <div
          styles={{
            /* center horizontally */
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid.Container justify="center" gap={2}>
            <Grid xs={24} md={12} lg={8}>
              <Title />
            </Grid>
            <Grid xs={0} md={12} lg={16}>
              <FullVideo video="/updated-intro-small.mp4" />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Self-Driving Tank"
                description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
                link="https://github.com/rajansagarwal/self-driving-tank"
                image="/boat.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Immersive Wearable AI"
                description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
                link="https://www.youtube.com/watch?v=Vmupugz2M1s&t=1s&ab_channel=RajanAgarwal"
                image="/portal-landing.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Reverse Engineering Earthquakes"
                description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
                link="https://www.loom.com/share/894f18b385ad4c82a700efb10252c826"
                image="/shapeshift-talk.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Restoring Digital Humanity"
                description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
                link="https://www.linkedin.com/company/campsocial/"
                image="/cs_shots.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Self Driving Vehicle, WATonomous"
                description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
                link="https://www.watonomous.ca/"
                image="/watonomous.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Articles />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Half Marathon"
                description="Connexsci is a grant funding platform that generates exposure to undervalued and independent research through graph-based analytics. Winner of Hack the North 2022."
                link="https://devpost.com/software/connexsci-20nrjy"
                image="/half-marathon.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Stats />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Offline Mesh Network"
                description="Zephyr is an offline mesh network that uses neighbouring devices as P2P nodes for long-distance interaction, for both simple messages and complex POST-requests"
                link="https://github.com/rajansagarwal/zephyr"
                image="/zephyr-pic.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Research Public Funding Model"
                description="Connexsci is a grant funding platform that generates exposure to undervalued and independent research through graph-based analytics. Winner of Hack the North 2022."
                link="https://devpost.com/software/connexsci-20nrjy"
                image="/connexsci_shots.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="The Platonist: Fictional Novel"
                description="A fictional novel that navigates the works of Plato's Republik through the story of a young boy, Ryan. The novel was noted a Top 20 Philosophy Book in North America."
                link="https://www.amazon.ca/Platonist-Awake-Dreaming-Rajan-Agarwal/dp/B0BRDD3QLQ/ref=sr_1_1?crid=2QCBOE10VAEAW&keywords=the+platonist+rajan&qid=1706422953&s=books&sprefix=the+platonist+rajan%2Cstripbooks%2C505&sr=1-1"
                image="https://z.rajan.sh/collection.png"
              />
            </Grid>
            <Grid xs={24} md={12} lg={8}>
              <Card
                name="Knowledge Repositories"
                description="A school-wide platform for club management and knowledge sharing, through repositories, content, announcements and quizzes."
                image="/homepage_aire_shots.png"
                link="https://github.com/rajansagarwal"
              />
            </Grid>
          </Grid.Container>
          <br />
          <br />
        </div>
      )}
    </main>
  );
}
