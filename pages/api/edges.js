// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { paperList } from '../dataset'

export default function handler(req, res) {
  function nodeData() {
    let nodes = [];
    let array = [];

    for (let i = 0; i < processed["to"].length; i++) {
      nodes.push(processed["to"][i]["to"]);
      nodes.push(processed["to"][i]["from"]);
    }

    const uniqueArray = nodes.filter(function (item, pos) {
      return nodes.indexOf(item) == pos;
    });

    function getColor(type) {
      if (type === ":Paper") {
        return "lightblue";
      } else if (type === ":Category") {
        return "lightpurple";
      } else if (type === ":Mesh") {
        return "rgb(247, 195, 195)";
      }
    }

    for (let i = 0; i < uniqueArray.length; i++) {
      if (findIt(uniqueArray[i])[0]?.labels === ":Paper") {
        array.push({
          id: uniqueArray[i],
          label: `${
            findIt(uniqueArray[i])[0]?.title
              ? findIt(uniqueArray[i])[0]
                  ?.title.split(" ")
                  .slice(0, 4)
                  .join(" ")
              : uniqueArray[i]
          }`,
          type: `${
            findIt(uniqueArray[i])[0]?.labels
              ? findIt(uniqueArray[i])[0]?.labels
              : "Paper"
          }`,
          size:
            findIt(uniqueArray[i])[0]?.title.split(" ")[0] === "Sensory"
              ? 25
              : findIt(uniqueArray[i])[0]?.labels === ":Paper"
              ? 15
              : 5,
          color:
            findIt(uniqueArray[i])[0]?.title.length > 6
              ? "#749ca1"
              : `#${findIt(uniqueArray[i])[0]?.title}`,
        });
      }
    }

    return array;
  }

  function findIt(item) {
    return processedNodes["to"].filter((x) => x.id === item);
  }

  function findEdge(item) {
    return processed["to"].filter((x) => x.id === item);
  }

  function edgeData() {
    let edges = processed["to"];
    let array = [];

    function getColor(text) {
      if (text === "IN_CATEGORY") {
        return "purple";
      } else if (text === "HAS_MeSH") {
        return "rgb(247, 195, 195)";
      } else if (text === "REFERENCES") {
        return "lightblue";
      }
    }

    for (let i = 0; i < edges.length; i++) {
      array.push({
        to: edges[i]["from"],
        from: edges[i]["to"],
        color: getColor(edges[i]["type"]),
        label: edges[i]["type"],
        id: edges[i]["id"],
        type: edges[i]["type"],
        size: edges[i]["size"],
        weight: edges[i]["weight"],
        width: 1.5,
        length: 300,
      });
    }

    return array;
  }

  function connected() {
    let nodes = [];
    let array = [];

    for (let i = 0; i < processed["to"].length; i++) {
      nodes.push(processed["to"][i]["to"]);
      nodes.push(processed["to"][i]["from"]);
    }

    const uniqueArray = nodes.filter(function (item, pos) {
      return nodes.indexOf(item) == pos;
    });

    for (let i = 0; i < uniqueArray.length; i++) {
      if (findIt(uniqueArray[i])[0]?.labels === ":Paper") {
        array.push({
          id: uniqueArray[i],
          label: `${
            findIt(uniqueArray[i])[0]?.title
              ? findIt(uniqueArray[i])[0]?.title
              : uniqueArray[i]
          }`,
          type: `${
            findIt(uniqueArray[i])[0]?.labels
              ? findIt(uniqueArray[i])[0]?.labels
              : "Paper"
          }`,
        });
      }
    }

    return array;
  }

  function backlink() {
    let nodes = [];
    let array = [];

    for (let i = 0; i < processed["to"].length; i++) {
      nodes.push(processed["to"][i]["to"]);
      nodes.push(processed["to"][i]["from"]);
    }

    const uniqueArray = nodes.filter(function (item, pos) {
      return nodes.indexOf(item) == pos;
    });

    for (let i = 0; i < uniqueArray.length; i++) {
      if (findIt(uniqueArray[i])[0]?.labels === ":Category") {
        array.push({
          id: uniqueArray[i],
          label: `${
            findIt(uniqueArray[i])[0]?.title
              ? findIt(uniqueArray[i])[0]
                  ?.title.split(" ")
                  .slice(0, 4)
                  .join(" ")
              : uniqueArray[i]
          }`,
          type: `${
            findIt(uniqueArray[i])[0]?.labels
              ? findIt(uniqueArray[i])[0]?.labels
              : "Paper"
          }`,
        });
      }
    }

    return array;
  }

  function mesh() {
    let nodes = [];
    let array = [];

    for (let i = 0; i < processed["to"].length; i++) {
      nodes.push(processed["to"][i]["to"]);
      nodes.push(processed["to"][i]["from"]);
    }

    const uniqueArray = nodes.filter(function (item, pos) {
      return nodes.indexOf(item) == pos;
    });

    for (let i = 0; i < uniqueArray.length; i++) {
      if (findIt(uniqueArray[i])[0]?.labels === ":Mesh") {
        array.push({
          id: uniqueArray[i],
          label: `${
            findIt(uniqueArray[i])[0]?.title
              ? findIt(uniqueArray[i])[0]
                  ?.title.split(" ")
                  .slice(0, 4)
                  .join(" ")
              : uniqueArray[i]
          }`,
          type: `${
            findIt(uniqueArray[i])[0]?.labels
              ? findIt(uniqueArray[i])[0]?.labels
              : "Paper"
          }`,
        });
      }
    }

    return array;
  }

  res.status(200).json({
    data: {
      graph: {
        nodes: nodeData(),
        edges: edgeData(),
      },
      links: backlink(),
      mesh: mesh(),
      connected: connected(),
    },
  });
}

const processed = {
  to: [
    {
      from: 22276,
      to: 46512,
      type: "REFERENCES",
    },
    {
      from: 22276,
      to: 43403,
      type: "REFERENCES",
    },
    {
      from: 46512,
      to: 29902,
      type: "REFERENCES",
    },
    {
      from: 36429,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 43403,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 46512,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 54825,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 63253,
      to: 62665,
      type: "REFERENCES",
    },
    {
      from: 55644,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 62665,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 63253,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 67046,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 69125,
      to: 32503,
      type: "REFERENCES",
    },
    {
      from: 32503,
      to: 23661,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 13428,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 19178,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 22697,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 19379,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 11531,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 23459,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 13019,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 8142,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 22960,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 8602,
      type: "IN_CATEGORY",
    },
    {
      from: 32503,
      to: 27854,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 31766,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 29952,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 30998,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 24691,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 27106,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 28394,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 24835,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 30551,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 28252,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 26447,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 26659,
      type: "HAS_MeSH",
    },
    {
      from: 32503,
      to: 29277,
      type: "HAS_MeSH",
    },
  ],
};

const processedNodes = {
  to: [
    {
      id: 32503,
      labels: ":Paper",
      title:
        "Sensory neurons in the Drosophila genital tract regulate female reproductive behavior.",
      rel_pos: "central_node",
    },
    {
      id: 22276,
      labels: ":Paper",
      title: "Internal medicine",
    },
    {
      id: 23661,
      labels: ":Category",
      title: "Endocrinology",
    },
    {
      id: 13428,
      labels: ":Category",
      title: "Receptor",
    },
    {
      id: 19178,
      labels: ":Category",
      title: "fruitless",
    },
    {
      id: 22697,
      labels: ":Category",
      title: "Oviduct",
    },
    {
      id: 19379,
      labels: ":Category",
      title: "Drosophila melanogaster",
    },
    {
      id: 11531,
      labels: ":Category",
      title: "Mating",
    },
    {
      id: 23459,
      labels: ":Category",
      title: "Central nervous system",
    },
    {
      id: 13019,
      labels: ":Category",
      title: "Nervous system",
    },
    {
      id: 8142,
      labels: ":Category",
      title: "Biology",
    },
    {
      id: 22960,
      labels: ":Category",
      title: "Sensory system",
    },
    {
      id: 8602,
      labels: ":Category",
      title: "Cell biology",
    },
    {
      id: 27854,
      labels: ":Mesh",

      title: "D000818",
    },
    {
      id: 31766,
      labels: ":Mesh",

      title: "D004330",
    },
    {
      id: 29952,
      labels: ":Mesh",

      title: "D029721",
    },
    {
      id: 30998,
      labels: ":Mesh",

      title: "D005260",
    },
    {
      id: 24691,
      labels: ":Mesh",

      title: "D017952",
    },
    {
      id: 27106,
      labels: ":Mesh",

      title: "D020868",
    },
    {
      id: 28394,
      labels: ":Mesh",

      title: "D005836",
    },
    {
      id: 24835,
      labels: ":Mesh",
      title: "D007150",
    },
    {
      id: 30551,
      labels: ":Mesh",

      title: "D010455",
    },
    {
      id: 28252,
      labels: ":Mesh",

      title: "D018000",
    },
    {
      id: 26447,
      labels: ":Mesh",

      title: "D011984",
    },
    {
      id: 26659,
      labels: ":Mesh",

      title: "D012726",
    },
    {
      id: 29277,
      labels: ":Mesh",

      title: "D015398",
    },
    {
      id: 29902,
      labels: ":Mesh",

      title: "D014599",
    },
    {
      id: 32503,
      labels: ":Paper",

      number: "000-004-303-413-936",

      title:
        "Sensory neurons in the Drosophila genital tract regulate female reproductive behavior.",
      rel_pos: "central_node",
    },
    {
      id: 36429,
      labels: ":Paper",

      number: "008-691-408-146-211",

      title:
        "A Neural Circuit Encoding the Experience of Copulation in Female Drosophila.",
    },
    {
      id: 43403,
      labels: ":Paper",

      number: "025-238-020-808-160",

      title:
        "A fructose receptor functions as a nutrient sensor in the Drosophila brain",
    },
    {
      id: 46512,
      labels: ":Paper",

      number: "033-211-431-281-121",

      title:
        "Temperature entrainment of Drosophila's circadian clock involves the gene nocte and signaling from peripheral sensory tissues to the brain.",
    },
    {
      id: 54825,
      labels: ":Paper",

      number: "057-070-089-145-187",

      title: "Social Interactions in “Simple” Model Systems",
    },
    {
      id: 55644,
      labels: ":Paper",

      number: "059-508-455-339-51X",

      title:
        "Ascending SAG Neurons Control Sexual Receptivity of Drosophila Females",
    },
    {
      id: 62665,
      labels: ":Paper",

      number: "084-109-607-515-85X",

      title: "Postcoital finesse.",
    },
    {
      id: 63253,
      labels: ":Paper",

      number: "086-311-386-010-939",

      title: "Unveiling the secrets to her heart.",
    },
    {
      id: 67046,
      labels: ":Paper",

      number: "101-890-020-024-229",

      title:
        "Central brain neurons expressing doublesex regulate female receptivity in Drosophila.",
    },
    {
      id: 69125,
      labels: ":Paper",

      number: "112-056-669-551-626",

      title:
        "Genetic Manipulation of Genes and Cells in the Nervous System of the Fruit Fly",
    },
  ],
};
