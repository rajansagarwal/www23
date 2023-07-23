import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Grid, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import Quad from "@/components/Quad";
import TextCard from "@/components/TextCard";
import ImageCard from "@/components/ImageCard";
const FullImage = dynamic(() => import("@/components/FullImage"));
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
          content="Rajan Agarwal - 18 year-old Software Engineer"
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
          <Intro />
          <Quad
            name="Earthquake-Resistant Buildings"
            description="Shapeshift is an implementation of Fourier research, using math + policy to design affordable earthquake-resistant buildings, using the latest in machine learning to interpolate policy and extrapolate ground frequencies."
            tag="Shapeshift"
            image="/shapeshift-dash.png"
          />
          <div className="flex flex-col gap-8">
            <TextCard
              name="Reverse Engineering Earthquakes"
              tag={"Research"}
              link="/parallels"
              description="By deriving a new equation for the Discrete Fourier Transform in the context of a seismic wave, in complement to the algorithm that plotted particle velocities as a function of frequency, direct correlations could be discovered between the movement, defined as HV SR×Rate, and the distance from the epicenter."
            />
            <TextCard
              name="Parallels to Portugal"
              tag={"Article"}
              link="/parallels"
              description="In November 1755, hell broke out in the capital of Portugal. Lisbon, and all that the country encompassed, fell to one of the largest natural distasters in European history. An earthquake, whose epicenter lay in the deep blues of the ocean, took advantage of the poor country's lack of infrastructure. Buildings — residential and royal — fell in fantastic fashion."
            />
          </div>
          <ImageCard
            name="Research Aggregation"
            description="Winning Canada's Largest Hackathon"
            image="https://z.rajan.sh/connexsci.png"
          />
          <Double
            name="Knowledge Repositories"
            description="A more thoughtful & community-first approach to shared knowledge. Building Aire helped change the way that I understand the communication of information that, throughout my life, often felt standardized."
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
            description="A Novel: Abstract Interpretation of the Works of Plato"
            image="https://z.rajan.sh/collection.png"
          />
        </Grid.Container>
      </Grid>
      <br />
      <br />
    </main>
  );
}
