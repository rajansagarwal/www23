import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Grid, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import Quad from "@/components/Quad";
import TextCard from "@/components/TextCard";
import ImageCard from "@/components/ImageCard";
const FullImage = dynamic(() => import("@/components/FullImage"));
const FullVideo = dynamic(() => import("@/components/FullVideo"));
import Double from "@/components/Double";
import Contact from "@/components/Contact";
import { ArrowUpRight, ArrowRight } from "@geist-ui/icons";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

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
              <div className="fade-in-4">
                <br className="x-desktop" />
                <br className="x-desktop" />
                <Quad
                  name="Optimizing Earthquake-Resistant Buildings"
                  description="Shapeshift is an implementation of Fourier research, using math + policy to design affordable earthquake-resistant buildings, using the latest in machine learning to interpolate policy and extrapolate ground frequencies."
                  tag="Shapeshift"
                  image="/shapeshift-dash.png"
                  video="/shapeshift-demo-small.gif"
                />
              </div>
              <div className="flex flex-col gap-6 fade-in-4-mid">
                <a
                  href="https://www.loom.com/share/a0d046b4d50846889e921eed98f09d35?sid=d1fe7968-e8ed-4cbd-b245-d6b39656ef19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Grid
                    className="aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
                    style={{
                      height: "16.5em",
                      overflow: "hidden",
                      width: "25em",
                    }}
                  >
                    <div>
                      <div className="px-5">
                        <div
                          className="text-neutral-400 text-sm line-clamp-1"
                          suppressHydrationWarning
                        >
                          <p
                            className="text-neutral-400 text-lg"
                            suppressHydrationWarning
                          >
                            <b className="font-bold font-mono">Shapeshift</b> is
                            a cutting-edge due diligence optimization platform
                            that streamlines the construction of
                            earthquake-resistant buildings. The platform
                            achieves this by utilizing novel
                            <b> mathematical and physics algorithms</b> to
                            understand seismic frequencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </a>
                <Link href="/parallels">
                  <Grid
                    className="x-mobile aspect-[1] bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors duration-300 ease-in-out cursor-pointer"
                    style={{
                      height: "12em",
                      overflow: "hidden",
                      width: "25em",
                    }}
                  >
                    <div>
                      <div className="px-5">
                        <div
                          className="text-neutral-400 text-sm line-clamp-1"
                          suppressHydrationWarning
                        >
                          <p
                            className="text-neutral-400 text-lg font-bold font-mono flex justify-between"
                            suppressHydrationWarning
                          >
                            Parallels to Portugal <ArrowRight />
                          </p>
                          <p
                            className="text-neutral-400 text-lg"
                            suppressHydrationWarning
                          >
                            A reflection and comparative analysis of Portugese
                            seismic relief and current earthquake crises,
                            written in Portugal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Link>
              </div>
              <div className="fade-in-5">
                <FullImage
                  name="ConnexSci: Embedding Research"
                  description="Winning Canada's Largest Hackathon"
                  // video="/connexsci-live.mp4"
                  image="https://z.rajan.sh/connexsci.png"
                />
              </div>
              <div className="fade-in-5-mid">
                <Double
                  name="Offline Mesh Network"
                  description="Inspired by the architecture of train, Zephyr is an offline mesh network that uses neighbouring devices as P2P nodes for long-distance interaction, for both simple messages and complex POST-requests. Written in Swift using MultiPeer Connectivity."
                  tag="Software Engineering"
                  stack={["Swift", "Python"]}
                  video
                  image="/zephyr-demo-small.mp4"
                />
              </div>
              <div className="fade-in-6">
                  <Double
                    name="Digital Humanity"
                    description="As a Software Engineer at Camp Social, I worked to help digital communities coordinate efforts, share resources, and achieve positive-sum outcomes. Working with Tyepscript, Ruby on Rails and Solidity, I wrote thousands of lines of production code."
                    tag="Software Engineering"
                    video
                    stack={["Ruby", "TypeScript", "Rust"]}
                    image="/CSD.mp4"
                  />
              </div>
              <div className="fade-in-6">
                  <FullVideo
                    name="The Platonist"
                    description="A Novel: Abstract Interpretation of the Works of Plato"
                    image="https://z.rajan.sh/collection.png"
                    video="/platonist-loop.mp4"
                  />
              </div>
              <div className="fade-in-6">
                  <FullImage
                    name="Etherealism: Poetry Visualizations"
                    description="A Novel: Abstract Interpretation of the Works of Plato"
                    image="https://z.rajan.sh/generated.png"
                  />
              </div>
              <div className="fade-in-6">
                  <Double
                    name="Knowledge Repositories"
                    description="A more thoughtful & community-first approach to shared knowledge. Building Aire helped change the way that I understand the communication of information that, throughout my life, often felt standardized."
                    tag="Communities of Knowledge"
                    stack={["Swift", "Python"]}
                    image="https://z.rajan.sh/homepage-aire.png"
                  />
              </div>
            </Grid.Container>
          </Grid>
          <br />
          <br />
        </>
      )}
    </main>
  );
}
