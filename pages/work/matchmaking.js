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
                  Matchmaking through Embeddings
                </h2>
                <p className="text-center text-neutral-400 line-clamp-1 text-lg">
                  Making visceral connections at events through embeddings.
                </p>
                <br />
              </div>
              <Image
                src={"/graph-view.png"}
                width={1000}
                height={600}
                className="rounded-lg w-[100%] md:w-[75%] lg:w-[70%]"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "5 / 3",
                }}
              />
              <br />
              <div className="text-white text-lg w-[100%] md:w-[75%] lg:w-[60%] pb-[10rem]">
                <p>
                  At TreeHacks 2024, myself,{" "}
                  <a
                    href="https://freemanjiang.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 font-mono"
                  >
                    <i>Freeman</i>
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://freemanjiang.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 font-mono"
                  >
                    <i>Leo</i>
                  </a>{" "}
                  hacked together a matchmaking graph of everyone at the event.
                  Our ethos was imagine, at the beginning of the event, we put
                  all 1,800 hackers in one room and asked everyone to make a new
                  friend. What are the odds that you meet someone incredible?
                  Not too bad. But to discover and cultivate a genuine
                  connection, it takes more than just luck. And why leave it to
                  chance?
                </p>
                <p>
                  We used custom NER models to extract individual information
                  from Slack under the <code>#team-searching</code> channel,
                  then embedded and reranked to get the top n connections for
                  each participant. Using a graphing framework called{" "}
                  <code>ngraph</code>, we were visualize these connections in 3D
                  space.
                </p>
                <p>
                  Some of the largest problems we faced in these 48 hours were:
                  <ol className="text-white">
                    <li>
                      How do we extract the most useful information from Slack
                      to avoid noise? <b>NER</b>
                    </li>
                    <li>
                      We have a lot of data, how do we scale?{" "}
                      <b>
                        ngraph converts this complex data into a 3D
                        representation with binary, with interactions done with
                        physics simulations
                      </b>
                    </li>
                    <li>
                      Why have a visualization?{" "}
                      <b>
                        we are building a matchmaking engine, and want to help
                        people search for their top matches. a graph is the most
                        intuitive way to understand what we are building.
                      </b>
                    </li>
                  </ol>
                </p>
                <p>
                  When presenting our graph, we rarely got asked the question{" "}
                  <i>How did you build this</i> and were mostly asked{" "}
                  <i>How can we implement this into our system</i>. We decided
                  to make a short guide and tweet for those who were interested,
                  but that interest far surpassed any expectation.
                </p>
                <p>
                  In parallel us making this release, the{" "}
                  <i>Socratica Symposium</i> was coming up, which is a
                  collection of makers in all forms. In our mission to bring the
                  thinkers of Waterloo together, we wanted to connect as many of
                  them as possible. So, we built <b>Matchmaking</b>,
                  Socratica&#39;s first open source software.
                </p>
                <p>
                  Alongside the graph, we wanted to create a simple interface
                  for people to look up their closest matches and why they were
                  most similar. While we loved the graph, at the user end it
                  strayed away from our larger goal of building these
                  connections. The graph was also hard to navigate on a phone,
                  so we wanted to make this as simple as possible.
                </p>
                <Image
                  src={"/graph-match.png"}
                  width={1000}
                  height={600}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 3",
                  }}
                />
                <br />
                <p>
                  We have composed a comprehensive guide in to how you can build
                  event graphs and matchmaking, as we believe that this should
                  be the new standard at large collectives of thinkers and
                  makers.
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
