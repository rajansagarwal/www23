import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Grid, Tabs, Text } from "@geist-ui/react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card";
import TextCard from "@/components/TextCard";
import ImageCard from "@/components/ImageCard";
import FullImage from "@/components/FullImage";
import Double from "@/components/Double";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Grid>
        <Grid.Container
          gap={2}
          justify="center"
          style={{
            marginTop: "2rem",
            padding: "2rem",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card />
          <TextCard
            name="Welcome"
            tag={"BREWING SOMETHING NEW"}
            description="I'm Rajan — I build with AI and Full Stack to create a more interconnected internet. Previously, I've worked in Software Engineering at Camp Social and Hack Club, as well as was a Founding Engineer of Arterial."
          />
          <ImageCard
            name="Research Aggregation"
            description="Winning Canada's Largest Hackathon"
            image="https://z.rajan.sh/connexsci.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/eee.jpg" />
          <Double
            name="Knowledge Repositories"
            description="A more thoughtful & community-first approach to shared knowledge. Platforms as such have changed the way that I understand the communication of information that, throughout my life, often felt standard."
            tag="Communities of Knowledge"
            image="https://z.rajan.sh/homepage-aire.png"
          />
          <Double
            name="Humanity on the Internet"
            description="Communities form to coordinate efforts, share resources, and achieve positive-sum outcomes. While aligning the value received by community leaders and participants has always been important, modern communities can go further to establish a tighter connection between the value to members and the overall organization’s worth."
            tag="Software Engineering"
            image="https://z.rajan.sh/cs-dashboard.png"
          />
          <ImageCard
            name="The Platonist"
            description="Abstract Novel Interpretation of the Works of Plato"
            image="https://z.rajan.sh/collection.png"
          />
          <ImageCard
            name="Fleet"
            description="Evolutionary Game Theory Algorithm"
            image="https://z.rajan.sh/EGT.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/ccc.jpg" />
          <ImageCard
            name="Centric"
            description="Medical data aggregation, built on custom chain"
            image="https://z.rajan.sh/bloom.png"
          />
          <FullImage name="Photography" image="https://z.rajan.sh/aaa.jpg" />
        </Grid.Container>
      </Grid>
      <br />
      <br />
    </main>
  );
}
