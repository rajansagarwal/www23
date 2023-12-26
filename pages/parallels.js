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
          <Grid
            className="aspect-[1] rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
            style={{
              height: "11em",
              width: "90em",
            }}
          >
            <div className="flex h-full w-full flex-col justify-between items-center">
              <div className="px-1">
                <h3 className=" text-center font-serif-variation mt-3 mb-5 font-serif text-3xl text-white font-light md:text-4xl lg:text-5xl">
                  Parallels to Portugal
                </h3>
                <p className="text-center text-neutral-500 line-clamp-1 text-sm">
                  Comparative analysis of Portugese seismic relief and current
                  earthquake crises.
                </p>
              </div>
              <div className="text-white w-[100%] md:w-[75%] lg:w-[50%] pb-[10rem]">
                <p>
                  In November 1755, hell broke out in the capital of Portugal.
                  Lisbon, and all that the country encompassed, fell to one of
                  the largest natural distasters in European history. An
                  earthquake, whose epicenter lay in the deep blues of the
                  ocean, took advantage of the poor country&#39;s lack of
                  infrastructure. Buildings — residential and royal — fell in
                  fantastic fashion. The city was soon stormed by biblical
                  tsunamis, forcing the surviving population to higher ground.
                  For the few that were left, earthquake frequencies set the
                  city on fire — house and castles alike — through the poorly
                  mounted candles, leaving Portugal in flames. <br />
                  <br />
                  Earthquake. Tsunami. Fire.
                  <br />
                  <br />
                  The king, who unironically developed a life-long phobia of
                  stone walls, fled the city to live in the royal campsite,
                  leaving the Marquee in control. Within a couple weeks, the
                  city was rebuilt with seismic resistance in mind. The
                  placement of each piece of wood and stone was calculated to
                  resist the next disaster, encouraging newfound engineering to
                  optimize these buildings, not for unique design but for
                  sustainability. These practices continued throughout the next
                  several centuries, including seismic practices by Salazar, the
                  fascist patriot, war-neutrality advocate and faux-dictator, in
                  modernizing Portugese infrastructure and accelerating economic
                  growth by enforcing policy — some avant-garde, others beyond
                  control of the people. <br />
                  <br />
                  The country moved out of a state of disarray and towards a
                  functioning state beyond the scope of natural disasters. This
                  was, nevertheless, as a function of state-wide disaster,
                  necessitating thoughtful engineering practices to revive the
                  country. Not all cities have this same opportunity.
                  Fastforward to 2023. In the recent Turkey-Syrian earthquakes,
                  buildings broke in a similar fashion. This time, however, it
                  was avoidable. A few years prior, in 2018, it was reported
                  that over 50% of constructed buildings in Turkey were in
                  violation of regulations — an attempt to prioritize
                  affordability over policy. Later, it was found that nearly all
                  fallen buildings during the earthquakes were constructed as
                  such. &#34;Earthquakes don&#39;t kill people. Bad buildings
                  do&#34;
                  <br />
                  <br />
                  The earthquake building crisis is at fault to (1) the dire
                  need for affordability and (2) the disregard of existing
                  seismic policy that optimizes zoning and urban planning yet
                  reduces the speed of development. Billions went to the
                  reconstruction of the Turkish buildings. Nearly none to
                  effective building analysis. These case studies and contless
                  more — research into the decay of earthquake frequencies in
                  South-East Australia and personal conversations with UNICEF
                  representatives after the Nepal earthquake of 2014 — have
                  culminated to three key insights that I have been trying to
                  solve. <br />
                  <br />
                </p>

                <ol className="text-white">
                  <li>
                    Affordability and speed often trump detail in building
                    design, meaning reconstructed/new buildings prioritize going
                    from idea to production withh the fewest resources in the
                    least amount of time.{" "}
                  </li>
                  <li>
                    Policies, while restrictive, are difficult to identify for
                    zoning and increase the time for due diligence; for
                    buildings that remain within regulations, time required to
                    complete planning in urban metros often takes up to 3
                    months, reducing time spent on ensuring sustainability.
                  </li>
                  <li>
                    If planning for seismic resistance is encountered, it is
                    timely, incomplete and expensive. To ensure resistance,
                    often all permutations are considered,
                    geological/geographical data are not considered and
                    facilities attempt to achieve accuracy through high-cost
                    testing.
                  </li>
                </ol>
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
