import BAR_LABELS from "./BAR_LABELS";
import { END_DOCK_IMGS } from "./END_IMGS";
import { FILTER_DOCK_IMGS } from "./FILTER_IMGS";
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



  filter:{

    wood_w: {
      id: "wood_w",
      title: "Wood W",
      img: FILTER_DOCK_IMGS.wood_w,
      link: { dock: "wood_w" },



      stats: [
        {
          title: "Description",
          type: "description",
          description: "Crafted from bleached wood pulp paper, this filter boasts a zigzag ‘Z’ pattern or a ‘W’ pattern.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "The zigzag design provides more surface area than a straight ‘I’ design, allowing for improved cooling and filtration. The bleached wood pulp paper ensures durability.",
        },
      ],


    },

    bamboo_w: {
      id: "bamboo_w",
      title: "Bamboo W",
      img: FILTER_DOCK_IMGS.bamboo_w,
      link: { dock: "bamboo_w" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Different data.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "Also different data.",
        },
      ],


    },

    wood_spiral: {
      id: "wood_spiral",
      title: "Wood Spiral",
      img: FILTER_DOCK_IMGS.wood_spiral,
      link: { dock: "wood_spiral" },
    },

    glass: {
      id: "glass",
      title: "Glass",
      img: FILTER_DOCK_IMGS.glass,
      link: { dock: "glass" },
    },

    aluminum: {
      id: "aluminum",
      title: "Aluminum",
      img: FILTER_DOCK_IMGS.aluminum,
      link: { dock: "aluminum" },
    },

    ceramic: {
      id: "ceramic",
      title: "Ceramic",
      img: FILTER_DOCK_IMGS.ceramic,
      link: { dock: "ceramic" },
    },



  },






  end:{

    open: {
      id: "open",
      title: "Open",
      img: END_DOCK_IMGS.open,
      link: { dock: "open" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "As the name suggests, the end is left open, exposing the cannabis inside. It’s similar to the end of a traditional cigarette.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "Allows for easy and immediate lighting. The open end can also provide assurance to users about the quality and consistency of the cannabis inside, as they can see it directly.",
        },
      ],


    },


    punched: {
      id: "punched",
      title: "Punched",
      img: END_DOCK_IMGS.punched,
      link: { dock: "punched" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Different data.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "Also different data.",
        },
      ],


    },



    twisted: {
      id: "twisted",
      title: "Twisted",
      img: END_DOCK_IMGS.twisted,
      link: { dock: "twisted" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "ALLLLL different data.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "Totally different data.",
        },
      ],


    },










  }












};

export default DOCK_DATA;
