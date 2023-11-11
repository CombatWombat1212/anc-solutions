import BAR_LABELS from "./BAR_LABELS";
import { PAPER_DOCK_IMGS } from "./PAPER_IMGS";

const DOCK_DATA = {
  paper: {
    wood_white: {
      id: "wood_white",
      title: "Wood (white)",
      img: PAPER_DOCK_IMGS.wood_white,
      link: { dock: "wood_white" },

      stats: [
        {
          title: "Made From",
          type: "description",
          description: "Fibers from the bamboo plant, refined to make rolling papers.",
        },
        {
          title: "Appearance",
          type: "description",
          description: "Light tan to pale yellow.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 40,
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 55,
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 35,
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description: "Light tan to pale yellow.",
        },
      ],
    },
    wood_brown: {
      id: "wood_brown",
      title: "Wood (brown)",
      img: PAPER_DOCK_IMGS.wood_brown,
      link: { dock: "wood_brown" },

      stats: [
        {
          title: "Other stat 1",
          type:"description",
          description: "Blah blah blah.",
        },
        {
          title: "Other stat 2",
          type:"description",
          description: "So much text.",
        },
        {
          title: "Other stat 3",
          type:"bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 67,
          },
        },
        {
          title: "Other stat 4",
          type:"bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 20,
          },
        },
        {
          title: "Other stat 5",
          type:"bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 85,
          },
        },
      ],
    },
    hemp: {
      id: "hemp",
      title: "Hemp (organic)",
      img: PAPER_DOCK_IMGS.hemp,
      link: { dock: "hemp" },
    },

    bamboo: {
      id: "bamboo",
      title: "Bamboo (organic)",
      img: PAPER_DOCK_IMGS.bamboo,
      link: { dock: "bamboo" },
    },

    cellulose: {
      id: "cellulose",
      title: "Cellulose",
      img: PAPER_DOCK_IMGS.cellulose,
      link: { dock: "cellulose" },
    },
  },
};

export default DOCK_DATA;
