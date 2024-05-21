"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import { Grid } from "@geist-ui/react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

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
          <h2 className="font-serif-variation mt-3 mb-5 font-bricolage-grotesque text-4xl text-white font-normal md:text-3xl lg:text-4xl">
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
        <Grid.Container justify="center" gap={2}>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Train Automation & Signal Processing"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://www.youtube.com/watch?v=Vmupugz2M1s&t=1s&ab_channel=RajanAgarwal"
              image="/nyct.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Embeddings Visualization"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://github.com/socratica-org/matchmaking"
              image="/graph-talking.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Self-Driving Tank"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://github.com/rajansagarwal/self-driving-tank"
              image="/boat.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="LLM Memory Architecture"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://www.youtube.com/watch?v=Vmupugz2M1s&t=1s&ab_channel=RajanAgarwal"
              image="/portal-side.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Visual Reasoning for Robotics"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="/"
              image="/depth-distances.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Reverse Engineering Earthquakes"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://shapeshift.space"
              image="/shapeshift-talk.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Research Public Funding Model"
              description="Connexsci is a grant funding platform that generates exposure to undervalued and independent research through graph-based analytics. Winner of Hack the North 2022."
              link="https://devpost.com/software/connexsci-20nrjy"
              image="/connexsci_shots.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Generative UI"
              description="Zephyr is an offline mesh network that uses neighbouring devices as P2P nodes for long-distance interaction, for both simple messages and complex POST-requests"
              link="https://tempolabs.ai"
              image="/tempo.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Self Driving Vehicle"
              description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
              link="https://www.watonomous.ca/"
              image="/watonomous.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Recommendation Engine"
              description="A Self-Driving Tank that can deliver food anywhere on the Waterloo campus, using PID, computer vision and custom neural networks for pathfinding. Built from scratch for the Waterloo Software Engineering 1A Design Project."
              link="https://aviato.co"
              image="/aviato.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Offline Mesh Network"
              description="Zephyr is an offline mesh network that uses neighbouring devices as P2P nodes for long-distance interaction, for both simple messages and complex POST-requests"
              link="https://github.com/rajansagarwal/zephyr"
              image="/zephyr-pic.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Restoring Digital Humanity"
              description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
              link="https://www.linkedin.com/company/campsocial/"
              image="/cs_shots.png"
            />
          </Grid>
          {/* <Grid xs={24} md={8} lg={6} xl={4}>
              <Articles />
            </Grid> */}
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="Half Marathon"
              description="Connexsci is a grant funding platform that generates exposure to undervalued and independent research through graph-based analytics. Winner of Hack the North 2022."
              link="/"
              image="/half-marathon.png"
            />
          </Grid>
          {/* <Grid xs={24} md={8} lg={6} xl={4}>
              <Stats />
            </Grid> */}
          <Grid xs={24} md={8} lg={6} xl={4}>
            <Card
              name="The Platonist: Fictional Novel"
              description="A fictional novel that navigates the works of Plato's Republik through the story of a young boy, Ryan. The novel was noted a Top 20 Philosophy Book in North America."
              link="https://www.amazon.ca/Platonist-Awake-Dreaming-Rajan-Agarwal/dp/B0BRDD3QLQ/ref=sr_1_1?crid=2QCBOE10VAEAW&keywords=the+platonist+rajan&qid=1706422953&s=books&sprefix=the+platonist+rajan%2Cstripbooks%2C505&sr=1-1"
              image="https://z.rajan.sh/collection.png"
            />
          </Grid>
          <Grid xs={24} md={8} lg={6} xl={4}>
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
    </main>
  );
}
