import { PAPER_DOCK_IMGS } from "./PAPER_IMGS";

const DOCK_DATA = {



  paper: {
    wood_white: {
      id:"wood_white",
      title: "Wood (white)",
      img: PAPER_DOCK_IMGS.wood_white,
      link: { dock: "wood_white" },

      stats: [
        {
          title: "Made From",
          description: "Fibers from the bamboo plant, refined to make rolling papers.",
        },
        {
          title: "Appearance",
          description: "Light tan to pale yellow.",
        },
        {
          title: "Burn Rate",
          bar: {
            type: "speed",
            value: 40,
          },
        },
        {
          title: "Porosity",
          bar: {
            type: "level",
            value: 55,
          },
        },
        {
          title: "Thickness",
          bar: {
            type: "width",
            value: 35,
          },
        },
        {
          title: "Flavour Effect",
          description: "Light tan to pale yellow.",
        },
      ],
    },
    wood_brown: {
      id:"wood_brown",
      title: "Wood (brown)",
      img: PAPER_DOCK_IMGS.wood_brown,
      link: { dock: "wood_brown" },

      stats: [
        {
          title: "Other stat 1",
          description: "Blah blah blah.",
        },
        {
          title: "Other stat 2",
          description: "So much text.",
        },
        {
          title: "Other stat 3",
          bar: {
            type: "speed",
            value: 67,
          },
        },
        {
          title: "Other stat 4",
          bar: {
            type: "level",
            value: 20,
          },
        },
        {
          title: "Other stat 5",
          bar: {
            type: "width",
            value: 85,
          },
        },
      ],
    },
    hemp: {
      id:"hemp",
      title: "Hemp (organic)",
      img: PAPER_DOCK_IMGS.hemp,
      link: { dock: "hemp" },
    },

    bamboo: {
      id:"bamboo",
      title: "Bamboo (organic)",
      img: PAPER_DOCK_IMGS.bamboo,
      link: { dock: "bamboo" },
    },

    cellulose: {
      id:"cellulose",
      title: "Cellulose",
      img: PAPER_DOCK_IMGS.cellulose,
      link: { dock: "cellulose" },
    },
  },
};

export default DOCK_DATA;
