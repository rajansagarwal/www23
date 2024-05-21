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
                  Building a Self Driving Tank
                </h2>
                <p className="text-center text-neutral-400 line-clamp-1 text-lg">
                  PID, PCBs and Processing
                </p>
                <br />
              </div>
              <Image
                src={"/boat.png"}
                width={2000}
                height={1200}
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
                  We challenged ourselves to create an autonomous model tank
                  that, upon receiving instructions to travel from Point A to
                  Point B on the University of Waterloo’s campus, would use
                  machine learning and computer vision to independently navigate
                  to its destination and deliver a small, meal-sized parcel.
                </p>
                <p>
                  To identify walking paths, we first tried accessing existing
                  walking path maps created by the university, but they were too
                  generalized. As such, we could not accurately identify
                  reference coordinates from these imprecise maps. Thus, we
                  began by using OpenCV to apply filtering functions that
                  converted a screenshot of Waterloo’s campus on Google Maps to
                  a black and white image of purely walking paths. Each black
                  pixel (or clickable point) on Google Maps is then converted
                  into a node, creating multiple paths of thousands of nodes and
                  edges.
                </p>
                <Image
                  src={"/boat-mapping.png"}
                  width={2000}
                  height={1200}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 2",
                  }}
                />
                <p>
                  We use Dijkstra’s algorithm to take these nodes and map out
                  the shortest path whenever the system is given a source and a
                  target. A neural network, using the open-source NEAT
                  algorithm, simulates countless cars traveling this path with
                  Pygame, eventually training the neural network to understand
                  what movement to use when it is a certain distance away from
                  walls in three directions.
                </p>
                <Image
                  src={"/boat-algorithm.png"}
                  width={2000}
                  height={1200}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 2",
                  }}
                />
                <p>
                  On the hardware end, we constructed a model tank. We attached
                  DC motors to two L298N motor controllers, which each connected
                  to a 9V power supply. We then routed these motors to the Pi.
                  Our processing, which would likely cause the Pi to crash, is
                  instead run on a server. We used a Python Flask microservice
                  bridging the aforementioned path algorithms and the Raspberry
                  Pi, which sends endpoints to the Pi in the form of GPIO Zero
                  commands in real-time. The endpoints, /forward, /backwards,
                  /left, /right, and /stop, are processed by an ngrok server and
                  direct voltage towards the respective DC motors.
                </p>
                <Image
                  src={"/boat-finished.png"}
                  width={2000}
                  height={1200}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 3",
                  }}
                />
                <p>
                  Our server processes the required information in two ways.
                  First, a phone camera streams video to our laptop through OBS,
                  which is processed by our algorithms at 30 frames per second.
                  These frames undergo a sequence of image transformations,
                  using varying hue, value, and contrast thresholds to isolate
                  paths from its surroundings (e.g., grass). This processing
                  enables us to generate Hough lines, in which we can project
                  three lines: straight, 45° left, and 45° right. We then
                  interpreted the depth, which was accomplished by creating
                  reference images for how distances are perceived from our
                  camera’s perspective 15 cm above the ground.
                </p>
                <Image
                  src={"/boat-processing.png"}
                  width={2000}
                  height={1200}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 3",
                  }}
                />
                <p>
                  The second source of information for our server is the
                  ultrasonic sensor. An endpoint on the Pi, /distance, returns
                  the distance to an object ahead of the Tank at that moment in
                  time. This value is calculated by sending an ultrasonic signal
                  and calculating the time for it to return, using existing
                  libraries with GPIO Zero.
                </p>
                <Image
                  src={"/boat-detection.png"}
                  width={2000}
                  height={1200}
                  className="rounded-lg w-[100%]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "5 / 2",
                  }}
                />
                <p>
                  Instead of using a GPS for distance, we chose to analyze the
                  Rotary PCB Encoders, which use magnets to calculate the number
                  of rotations. When we send motor instructions in a specific
                  direction, we can calculate the net distance traveled towards
                  our final destination. We can then add weightings to certain
                  directions, influencing the pathfinding to stay on track in a
                  specific direction. During experimentation, we found that
                  Apple’s public GPS distances have a significant margin of
                  error (±100 metres), so this weighting estimation would not
                  result in a significant loss. Although we were concerned that
                  the tank would not consistently stop in the same place, we
                  were willing to sacrifice slight inconsistencies in the
                  endpoint to ensure that the tank stayed on path. We noticed
                  drastic turns often led to small inconsistencies, but worked
                  well for simpler paths like V1 greens.
                </p>
                <p>
                  Our model, which is trained on the simulation data, receives
                  the four parameters (three distances and ultrasonic distance),
                  allowing it to scale the tank’s speed and size relative to the
                  real-life walking path. Realtime inputs enabled us to use PID
                  controllers to evaluate error, and send adjustments; this was
                  critical due to the inconsistencies with the brushed DC motor
                  we were given. The model and feedback loops were an
                  interesting challenge, only made possible with conversations
                  and teachings from Mechatronics upper years, who worked at
                  Tesla and AI companies. With the inputs that it receives from
                  the path detection and ultrasonic sensor, the model can
                  iteratively send post requests to our Pi’s ngrok server for a
                  certain number of seconds, operating in real-time.
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
