import SELECTION_IMGS from "./SELECTION_IMGS";

const PRODUCT_DATA = {
  traditional: {
    index: 1,
    id: "traditional",
    short: "Traditional",
    long: "Traditional Pre-Roll",


    pages: {
      selection: {
        images: {
          photo: SELECTION_IMGS.traditional_photo,
          vector: SELECTION_IMGS.traditional_vector,
        },
        description:
        "A traditional cannabis pre-roll is a ready-made joint, eliminating the need for manual rolling and grinding. For consumers, it promises immediate convenience and a consistent smoking experience. For growers, it represents an efficient use of product and a profitable avenue with strong branding potential.",
        link: { page: "schematic", type: "traditional" },
      },
    }
      


  },

  cigarette: {
    index: 2,
    id: "cigarette",
    short: "Cigarette",
    long: "Cigarette Pre-Roll",
    pages: {

    selection: {
      images: {
        photo: SELECTION_IMGS.cigarette_photo,
        vector: SELECTION_IMGS.cigarette_vector,
      },
      description:
        "A cannabis cigarette pre-roll is a professionally packed, ready-to-smoke marijuana cigarette, offering consumers immediate convenience and consistency. For growers, pre-rolls efficiently utilize trim and small buds, presenting an additional revenue stream and branding opportunity in a familiar, accessible format.",
      link: { page: "schematic", type: "cigarette" },
    },
    },
  },

  blunt: {
    index: 3,
    id: "blunt",
    short: "Blunt",
    long: "Blunt",
    pages: {

    selection: {
      images: {
        photo: SELECTION_IMGS.blunt_photo,
        vector: SELECTION_IMGS.blunt_vector,
      },
      description:
        "A blunt is a cannabis-filled cigar wrap, often offering a richer flavor and longer burn. For consumers, it provides a robust and extended smoking session. For growers, blunts tap into a niche market, blending traditional cigar culture with cannabis, offering unique branding and profit opportunities.",
      link: { page: "schematic", type: "blunt" },
    },
    },
  },
  infused: {
    index: 4,
    id: "infused",
    short: "Infused",
    long: "Infused Pre-Roll",
    pages: {

    selection: {
      images: {
        photo: SELECTION_IMGS.infused_photo,
        vector: SELECTION_IMGS.infused_vector,
      },
      description:
        "An infused pre-roll combines cannabis flower with concentrated forms like oils or kief, amplifying potency and flavor. For consumers, it delivers an enhanced, often more intense experience. For growers and producers, it offers a premium product line with higher profit margins, catering to experienced users seeking a stronger effect.",
      link: { page: "schematic", type: "infused" },
    },
    },
  },






  
  // types: {
  //   traditional: {
  //     id: "traditional",
  //     index: 1,
  //     short: "Traditional",
  //     long: "Traditional Pre-Roll",
  //     // link:{type:"traditional"},
  //     images: {
  //       photo: SELECTION_IMGS.traditional_photo,
  //       vector: SELECTION_IMGS.traditional_vector,
  //     },
  //     description:
  //       "A traditional cannabis pre-roll is a ready-made joint, eliminating the need for manual rolling and grinding. For consumers, it promises immediate convenience and a consistent smoking experience. For growers, it represents an efficient use of product and a profitable avenue with strong branding potential.",
  //   },
  // cigarette: {
  //   id: "cigarette",
  //   index: 2,
  //   short: "Cigarette",
  //   long: "Cigarette Pre-Roll",
  //   // link:{type:"cigarette"},
  //   images: {
  //     photo: SELECTION_IMGS.cigarette_photo,
  //     vector: SELECTION_IMGS.cigarette_vector,
  //   },
  //   description:
  //     "A cannabis cigarette pre-roll is a professionally packed, ready-to-smoke marijuana cigarette, offering consumers immediate convenience and consistency. For growers, pre-rolls efficiently utilize trim and small buds, presenting an additional revenue stream and branding opportunity in a familiar, accessible format.",
  // },
  // blunt: {
  //   id: "blunt",
  //   index: 3,
  //   short: "Blunt",
  //   long: "Blunt",
  //   // link:{type:"blunt"},
  //   images: {
  //     photo: SELECTION_IMGS.blunt_photo,
  //     vector: SELECTION_IMGS.blunt_vector,
  //   },
  //   description:
  //     "A blunt is a cannabis-filled cigar wrap, often offering a richer flavor and longer burn. For consumers, it provides a robust and extended smoking session. For growers, blunts tap into a niche market, blending traditional cigar culture with cannabis, offering unique branding and profit opportunities.",
  // },
  // infused: {
  //   id: "infused",
  //   index: 4,
  //   short: "Infused",
  //   long: "Infused Pre-Roll",
  //   // link:{type:"infused"},
  //   images: {
  //     photo: SELECTION_IMGS.infused_photo,
  //     vector: SELECTION_IMGS.infused_vector,
  //   },
  //   description:
  //     "An infused pre-roll combines cannabis flower with concentrated forms like oils or kief, amplifying potency and flavor. For consumers, it delivers an enhanced, often more intense experience. For growers and producers, it offers a premium product line with higher profit margins, catering to experienced users seeking a stronger effect.",
  // },
  // },
  // },
};

export default PRODUCT_DATA;
