import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Grid, Tabs, Text } from "@geist-ui/react";
// import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card";
import TextCard from "@/components/TextCard";
import ImageCard from "@/components/ImageCard";
import FullImage from "@/components/FullImage";
import Double from "@/components/Double";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>Rajan Agarwal</title>
        <meta
          name="description"
          content="Rajan Agarwal - 17 year-old Maker of Things."
        />
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/160/apple/81/seedling_1f331.png"
        />
      </Head>
      <Grid
        style={{
          marginTop: "2rem",
          padding: "2rem",
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
          }}
        >
          <Card />
          <Double
            name="Earthquake-Resistant Buildings"
            description="Shapeshift is an implementation of Fourier research, using math + policy to design affordable earthquake-resistant buildings, using the latest in machine learning to interpolate policy and extrapolate ground frequencies."
            tag="Shapeshift"
            image="/shapeshift-dash.png"
          />
          <Double
            name="Knowledge Repositories"
            description="A more thoughtful & community-first approach to shared knowledge. Building Aire helped change the way that I understand the communication of information that, throughout my life, often felt standardized."
            tag="Communities of Knowledge"
            image="https://z.rajan.sh/homepage-aire.png"
          />
          <ImageCard
            name="Research Aggregation"
            description="Winning Canada's Largest Hackathon"
            image="https://z.rajan.sh/connexsci.png"
          />
          <Contact />
          <Double
            name="Humanity on the Internet"
            description="Communities form to coordinate efforts, share resources, and achieve positive-sum outcomes. While aligning the value received by community leaders and participants has always been important, modern communities can go further to establish a tighter connection between the value to members and the overall organization’s worth."
            tag="Software Engineering"
            image="https://z.rajan.sh/cs-dashboard.png"
          />
          <ImageCard
            name="The Platonist"
            description="A Novel: Abstract Interpretation of the Works of Plato"
            image="https://z.rajan.sh/collection.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/ccc.jpg" />
          <ImageCard
            name="Fleet"
            description="Evolutionary Game Theory Algorithm"
            image="https://z.rajan.sh/EGT.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/aaa.jpg" />
          <Double
            name="Etherealism: Visual Interpretations"
            description="A text-to-image GAN built from scratch that interprets key words, emotions and concepts from poetry and creates a symbolic image around these varying interpretations."
            tag="Software Engineering"
            image="https://z.rajan.sh/generated.png"
          />
          <ImageCard
            name="Equitable Access"
            description="Raising $20K with ChoiceDAO"
            image="https://z.rajan.sh/cdao.png"
          />
          <FullImage
            name="First Robot (2016)"
            image="https://z.rajan.sh/robot.jpg"
          />
          <ImageCard
            name="Hack Club Apply"
            description="Redesigned Application, 1M+ Reach; 7K Active"
            image="https://z.rajan.sh/hcapply.png"
          />
          <TextCard
            name="Fourier Analysis of Earthquakes"
            tag={"Efficient Building Designs"}
            description="By deriving a new equation for the Discrete Fourier Transform in the context of a seismic wave, in complement to the algorithm that plotted particle velocities as a function of frequency, direct correlations could be discovered between the movement, defined as HV SR×Rate, and the distance from the epicenter."
          />
          <ImageCard
            name="Centric"
            description="Medical data aggregation, built on custom chain"
            image="https://z.rajan.sh/bloom.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/eee.jpg" />
        </Grid.Container>
      </Grid>
      <br />
      <br />
    </main>
  );
}
