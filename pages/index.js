import Head from "next/head";
import { Grid } from "@geist-ui/react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [filters, setFilters] = useState([]);

  // Define a list of cards with a category for each card
  const cards = [
    {
      categories: ["Software", "Experiments", "LLMs"],
      name: "The Human Simulation Lab",
      link: "https://humansimulation.ai",
      image: "/skyline.webp",
      description:
        "A research collective at the University of Waterloo, focusing on human simulations and prediction.",
    },
    {
      categories: ["Software"],
      name: "Train Automation & Signal Processing",
      link: "/work/train-automation",
      image: "/nyct.png",
      description:
        "Interning at Hitachi Rail to work on train automation and critical safety systems. Currently building the company's first simulation software using train logs and signal processing",
    },
    {
      categories: ["LLMs", "Software"],
      name: "Embeddings Visualization",
      link: "/work/matchmaking",
      image: "/graph-talking.png",
      description:
        "An open sourced matchmaking graphs at events to visualize the connections between people and their interests. Built using LLMs and graph embeddings and used on 700+ person events.",
    },
    {
      categories: ["Robotics", "Software", "Machine Learning"],
      name: "Self-Driving On Campus Food Delivery",
      link: "/work/tank",
      image: "/boat.png",
      description:
        "A self-driving RC tank that delivers food around campus. We combined perception, world modelling and motion planning strategies. Featured by OpenCV.",
    },
    {
      categories: ["LLMs", "Software", "Machine Learning", "Experiments"],
      name: "LLM Memory Architecture",
      link: "https://www.youtube.com/watch?v=Vmupugz2M1s&t=1s&ab_channel=RajanAgarwal",
      image: "/portal-side.png",
      description:
        "An AI Video Wearable to ambiently compute your life and store it in a knowledge graph for inference. Winner of Hack the North 2023 and presented at Socratica Symposium",
    },
    {
      categories: ["Robotics", "Software", "Machine Learning", "Experiments"],
      name: "Visual Reasoning for Robotics",
      link: "/",
      image: "/depth-distances.png",
      description:
        "End-to-end neural networks for visual reasoning in dynamic, changing scenarios. We used depth and optical flow algorithms to predict the future of the environment.",
    },
    {
      categories: ["Experiments", "Software", "Machine Learning", "LLMs"],
      name: "Reverse Engineering Earthquakes",
      link: "https://shapeshift.space",
      image: "/shapeshift-talk.png",
      description:
        "Optimization of earthquake-resistant buildings using novel fourier algorithms, as well as policy analysis with RAG, reranking and LLMs.",
    },
    {
      categories: ["Experiments", "Software", "Machine Learning"],
      name: "Audio Embeddings from Waveforms",
      link: "/",
      image: "/image-9.png",
      description:
        "Audio embeddings model to spatially represent sentiment from waveform spectrograms",
    },
    {
      categories: ["Experiments", "Software", "Machine Learning"],
      name: "Research Public Funding Model",
      link: "https://devpost.com/software/connexsci-20nrjy",
      image: "/connexsci_shots.png",
      description:
        "Funding model for public investments in research, using knowledge graphs and distributed investments. Winner of Hack the North 2022.",
    },
    {
      categories: ["Robotics", "Software", "Machine Learning"],
      name: "Autonomous Car Design Team",
      link: "https://www.watonomous.ca/",
      image: "/watonomous.png",
      description:
        "A self-driving car design team in Waterloo. Working on the Motion Planning & Control team to convert directions into movement splines and motor controls.",
    },
    {
      categories: ["Software", "Machine Learning", "Experiments"],
      name: "At-home AI Clusters",
      link: "https://github.com/exo-explore/exo",
      image: "/exo.jpeg",
      description:
        "Implementing PrivateLORA for Low Rank local LLM fine-tuning on at-home clusters using distributed compute from Macbooks, iPhones, iPads and Apple Watches.",
    },
    {
      categories: ["Software", "Machine Learning", "Experiments"],
      name: "Speaker Diarization for Long-form Audio",
      link: "https://kino.ai",
      image: "/kino.png",
      description:
        "SOTA Speaker Diarization to identify unique speakers in long-form audio using custom embeddings.",
    },
    {
      categories: ["Robotics", "Software", "Machine Learning"],
      name: "Self Driving Race Car Advisor",
      link: "https://celeritasresearch.org/",
      image: "/celeritas.jpg",
      description:
        "Technical advisor for a self-driving race car design team in California working with novel applications of Vision Transformers with Reinforcement Learning",
    },
    {
      categories: ["LLMs", "Software", "Experiments"],
      name: "Recommendation Engine",
      link: "https://aviato.co",
      image: "/aviato-dash.png",
      description:
        "A recommendation engine for hiring AI engineers, contract work with Aviato.",
    },
    {
      categories: ["Software", "Experiments"],
      name: "Offline Mesh Network",
      link: "https://github.com/rajansagarwal/zephyr",
      image: "/zephyr-pic.png",
      description:
        "An offline mesh using multi peer connectivity to send encrypted messages between devices in your vicinity without internet.",
    },
    {
      categories: ["LLMs", "Software", "Experiments"],
      name: "Generative UI",
      link: "https://tempolabs.ai",
      image: "/tempo.png",
      description:
        "Worked with Tempo Labs to build generative UI from scratch.",
    },
    {
      categories: ["Software"],
      name: "Restoring Digital Humanity",
      link: "https://www.linkedin.com/company/campsocial/",
      image: "/cs_shots.png",
      description:
        "Internship to work on restroring humanity online. I worked primarily on the rewards platform, in Solidity, Ruby and Typescript.",
    },
    // {
    //   categories: [],
    //   name: "Half Marathon",
    //   link: "/",
    //   image: "/half-marathon.png",
    //   description: "Ran a half marathon the day before my midterms!",
    // },
    {
      categories: [],
      name: "The Platonist: Fictional Novel",
      link: "https://www.amazon.ca/Platonist-Awake-Dreaming-Rajan-Agarwal/dp/B0BRDD3QLQ/ref=sr_1_1?crid=2QCBOE10VAEAW&keywords=the+platonist+rajan&qid=1706422953&s=books&sprefix=the+platonist+rajan%2Cstripbooks%2C505&sr=1-1",
      image: "https://z.rajan.sh/collection.png",
      description:
        "Wrote a novel about a high school student in the context of the works of Plato.",
    },
    {
      categories: ["Software", "Experiments"],
      name: "Knowledge Repositories",
      description:
        "A school-wide platform for club management and knowledge sharing, through repositories, content, announcements and quizzes.",
      link: "/",
      image: "/homepage_aire_shots.png",
      description:
        "School-wide club management platform for knowledge sharing, through repositories, content, announcements and quizzes.",
    },
  ];

  const handleFilterChange = (category) => {
    setFilters((currentFilters) => {
      if (currentFilters.includes(category)) {
        return currentFilters.filter((f) => f !== category);
      } else {
        return [...currentFilters, category];
      }
    });
  };

  const categories = [
    // "Robotics",
    // "Software",
    "LLMs",
    "Machine Learning",
    "Experiments",
    // "Writings",
  ];

  return (
    <main className="p-4 md:p-[2rem]">
      <Head>
        <title>Rajan Agarwal</title>
        <meta name="theme-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="description"
          content="Rajan Agarwal is studying Software Engineering at theUniversity of Waterloo. He is currently working on AI for systems, both digital and embedded, to better understand and interact with our digital and physical world. He has built human simulations, visual reasoning for robotics, earthquake-resistant building optimization, self driving cars and written novels about philosophy."
        />
        <meta
          name="keywords"
          content="Rajan Agarwal, Software Engineer, University of Waterloo, Human Simulation Lab, Skyline, Waterloo, Simulation, Shapeshift, Arterial, Camp Social, Hack Club, Summer 2024 jobs, Rajan, Agarwal, Toronto, Portal, Wearable, Tab"
        />
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/160/apple/81/seedling_1f331.png"
        />
        <meta property="og:image" content="/shapeshift-talk.png" />
      </Head>
      <div className="flex justify-center pb-16">
        <Grid.Container justify="center" gap={2}>
          <Grid xs={24} md={8} lg={6} xl={4}>
            <div className="flex flex-col justify-between w-full p-2 rounded-md">
              <div>
                <h2 className="font-serif-variation mt-3 font-bricolage-grotesque text-4xl text-white font-normal md:text-3xl lg:text-4xl">
                  Rajan Agarwal
                </h2>
                <p className="text-neutral-400 text-lg font-bricolage-grotesque w-[100%] max-w-[500px]">
                  AI, both digital and embedded, to understand
                and interact with our world.
                  {/* I build AI for the web & hardware. */}
                </p>
              </div>
              <div>
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
                  Currently @ The Human Simulation Lab, Watonomous
                </p>
                {/* <div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`p-2 mr-2 mb-2 rounded-md hover:bg-zinc-800 ${
                        filters.includes(category)
                          ? "bg-zinc-800"
                          : "bg-zinc-900"
                      }`}
                      onClick={() => handleFilterChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div> */}
              </div>
            </div>
          </Grid>

          {cards
            .filter(
              (card) =>
                filters.length === 0 ||
                (card.categories &&
                  card.categories.some((category) =>
                    filters.includes(category)
                  ))
            )
            .map((card, index) => (
              <Grid key={index} xs={24} md={8} lg={6} xl={4}>
                <Card
                  name={card.name}
                  link={card.link}
                  image={card.image}
                  description={card.description}
                />
              </Grid>
            ))}
        </Grid.Container>
        <br />
        <br />
      </div>
    </main>
  );
}
