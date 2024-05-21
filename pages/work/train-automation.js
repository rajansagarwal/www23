import Head from "next/head";
import Image from "next/image";
import { Grid } from "@geist-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>Rajan Agarwal</title>
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
          <Grid
            className="aspect-[1] rounded-md transition-colors duration-300 ease-in-out"
            style={{
              height: "11em",
              width: "90em",
            }}
          >
            <div className="flex h-full w-full flex-col justify-between items-center">
              <div className="px-1">
                <h2 className="font-bricolage-grotesque text-center mt-3 mb-5 text-3xl text-white md:text-4xl lg:text-5xl">
                  Train Automation
                </h2>
                <p className="text-center text-neutral-400 line-clamp-1 text-lg">
                  Critical Safety Systems for Trains through embedded systems
                  and simulation software.
                </p>
                <br />
              </div>
              <Image
                src={"/nyct.png"}
                width={1000}
                height={600}
                className="rounded-lg w-[100%] md:w-[75%] lg:w-[70%]"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "2 / 1",
                }}
              />
              <br />
              <div className="text-white text-lg w-[100%] md:w-[75%] lg:w-[60%] pb-[10rem]">
                <p>
                  This summer, I am working on Train Automation & Signal
                  Processing at Hitachi Rail, building critical safety systems
                  for the New York railroads. I will continually update this
                  page as my work grows.
                </p>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </Grid>
      <br />
      <br />
    </main>
  );
}
