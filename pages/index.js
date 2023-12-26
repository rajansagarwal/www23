import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Grid, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import Intro from "@/components/Intro";
import Quad from "@/components/Quad";
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
    <main>
      {loading ? (
        <div
          style={{
            background: "black",
          }}
        >
          Rajan Agarwal
        </div>
      ) : (
        <>
          <Head>
            <title>Rajan Agarwal</title>
            <meta
              name="description"
              content="Rajan Agarwal - 18 year-old Software Engineer studying at the University of Waterloo. Rajan is currently building Shapeshift, a due-diligence optimization platform to streamline the production of earthquake-ressitant buildings. Previously, he has worked at Arterial, Camp Social and Hack Club. Rajan is presently looking for work in Summer 2024."
            />
            <link
              rel="icon"
              href="https://em-content.zobj.net/thumbs/160/apple/81/seedling_1f331.png"
            />
          </Head>
          <Grid
            style={{
              marginTop: "2rem",
            }}
          >
            <Grid.Container
              gap={2}
              justify="center"
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "90vw",
                margin: "0 5vw",
              }}
            >
              <Intro />
              <div style={{ flex: 1, maxWidth: "100%" }}>
                <div className="fade-in-4">
                  <br className="x-desktop" />
                  <br className="x-desktop" />
                  <Large
                    name="Reliving Memories with Portal"
                    description="Shapeshift is an implementation of Fourier research, using math + policy to design affordable earthquake-resistant buildings, using the latest in machine learning to interpolate policy and extrapolate ground frequencies."
                    tag="Portal"
                    image="/shapeshift-dash.png"
                    video="/shapeshift-demo-small.gif"
                  />
                </div>
              </div>
              <div style={{ flex: 1, maxWidth: "100%" }}>
                <div className="fade-in-5">
                  <Large
                    name="Optimizing Earthquake-Resistant Buildings"
                    description="Shapeshift is an implementation of Fourier research, using math + policy to design affordable earthquake-resistant buildings, using the latest in machine learning to interpolate policy and extrapolate ground frequencies."
                    tag="Shapeshift"
                    image="/shapeshift-dash.png"
                    video="/shapeshift-demo-small.gif"
                  />
                </div>
              </div>
              <div
                className="fade-in-5-mid"
                style={{ flex: 1, maxWidth: "100%" }}
              >
                <Double
                  name="Self-Driving Tank"
                  description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
                  tag="Design Project"
                  stack={["Swift", "Python"]}
                  image="/boat.png"
                  video="/boat-5.mp4"
                />
              </div>
              <div className="fade-in-6" style={{ flex: 1, maxWidth: "100%" }}>
                <Double
                  name="Digital Humanity"
                  description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
                  tag="Software Engineer Intern 2022"
                  image="/camp-still.png"
                  stack={["Ruby", "TypeScript", "Rust"]}
                  video="/CSD.mp4"
                />
              </div>
              <div
                className="fade-in-5-mid"
                style={{ flex: 1, maxWidth: "100%" }}
              >
                <Double
                  name="Offline Mesh Network"
                  description="Zephyr is an offline mesh network that uses neighbouring devices as P2P nodes for long-distance interaction, for both simple messages and complex POST-requests"
                  tag="Swift Application"
                  stack={["Swift", "Python"]}
                  image="/zephyr-pic.png"
                  video="/zephyr-demo-small.mp4"
                />
              </div>
              <div
                className="fade-in-5-mid"
                style={{ flex: 1, maxWidth: "100%" }}
              >
                <Double
                  name="ConnexSci"
                  description="Connexsci is a grant funding platform that generates exposure to undervalued and independent research through graph-based analytics. Winner of Hack the North 2022."
                  tag="RESEARCH FUNDING"
                  stack={["Swift", "Python"]}
                  image="/connexsci.png"
                  video="/connexsci-smallest.mp4"
                />
              </div>
              <div
                className="fade-in-5-mid"
                style={{ flex: 1, maxWidth: "100%" }}
              >
                <Double
                  name="The Platonist"
                  description="A fictional novel that navigates the works of Plato's Republik through the story of a young boy, Ryan. The novel was noted a Top 20 Philosophy Book in North America."
                  tag="FICTIONAL NOVEL"
                  stack={["Swift", "Python"]}
                  image="https://z.rajan.sh/collection.png"
                  video="/platonist-loop.mp4"
                />
              </div>
              <div className="fade-in-6" style={{ flex: 1, maxWidth: "100%" }}>
                <Double
                  name="Knowledge Repositories"
                  description="A school-wide platform for club management and knowledge sharing, through repositories, content, announcements and quizzes."
                  tag="Communities of Knowledge"
                  stack={["Swift", "Python"]}
                  video="false"
                  image="https://z.rajan.sh/homepage-aire.png"
                />
              </div>
              <br/><br/><br/>
            </Grid.Container>
          </Grid>
          <br />
          <br />
        </>
      )}
    </main>
  );
}
