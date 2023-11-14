import PREROLL_TYPES from "./PREROLL_TYPES";
import SELECTION_IMGS from "./SELECTION_IMGS";

const SELECTION_DATA_RAW = {
  traditional: {
    title: {
      short: "Traditional",
      long: "Traditional Pre-Roll",
    },
    images: {
      photo: SELECTION_IMGS.traditional_photo,
      vector: SELECTION_IMGS.traditional_vector,
    },
    description:
      "A traditional cannabis pre-roll is a ready-made joint, eliminating the need for manual rolling and grinding. For consumers, it promises immediate convenience and a consistent smoking experience. For growers, it represents an efficient use of product and a profitable avenue with strong branding potential.",
    link: { page: "schematic", type: "traditional" },
  },

  cigarette: {
    title: {
      short: "Cigarette",
      long: "Cigarette Pre-Roll",
    },

    images: {
      photo: SELECTION_IMGS.cigarette_photo,
      vector: SELECTION_IMGS.cigarette_vector,
    },
    description:
      "A cannabis cigarette pre-roll is a professionally packed, ready-to-smoke marijuana cigarette, offering consumers immediate convenience and consistency. For growers, pre-rolls efficiently utilize trim and small buds, presenting an additional revenue stream and branding opportunity in a familiar, accessible format.",
    link: { page: "schematic", type: "cigarette" },
  },

  blunt: {
    title: {
      short: "Blunt",
      long: "Blunt",
    },
    images: {
      photo: SELECTION_IMGS.blunt_photo,
      vector: SELECTION_IMGS.blunt_vector,
    },
    description:
      "A blunt is a cannabis-filled cigar wrap, often offering a richer flavor and longer burn. For consumers, it provides a robust and extended smoking session. For growers, blunts tap into a niche market, blending traditional cigar culture with cannabis, offering unique branding and profit opportunities.",
    link: { page: "schematic", type: "blunt" },
  },

  infused: {
    title: {
      short: "Infused",
      long: "Infused Pre-Roll",
    },

    images: {
      photo: SELECTION_IMGS.infused_photo,
      vector: SELECTION_IMGS.infused_vector,
    },
    description:
      "An infused pre-roll combines cannabis flower with concentrated forms like oils or kief, amplifying potency and flavor. For consumers, it delivers an enhanced, often more intense experience. For growers and producers, it offers a premium product line with higher profit margins, catering to experienced users seeking a stronger effect.",
    link: { page: "schematic", type: "infused" },
  },
};

function processSelectionData(SELECTION_DATA_RAW) {
  const data = {};

  for (const key in SELECTION_DATA_RAW) {
    if (SELECTION_DATA_RAW.hasOwnProperty(key)) {
      data[key] = { ...SELECTION_DATA_RAW[key] };
      data[key].id = key;
      data[key].index = PREROLL_TYPES.indexOf(key);

    }
  }

  return data;
}

const SELECTION_DATA = processSelectionData(SELECTION_DATA_RAW);

export default SELECTION_DATA;
