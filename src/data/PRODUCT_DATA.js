import DOCK_DATA from "./DOCK_DATA";
import PREROLL_TYPES from "./PREROLL_TYPES";
import SELECTION_DATA from "./SELECTION_DATA";
import SCHEMATIC_DATA from "./SCHEMATIC_DATA";
import SIZES_DATA from "./SIZES_DATA";
import PAPER_DATA from "./PAPER_DATA";
import FILTER_DATA from "./FILTER_DATA";
import COMPACTION_DATA from "./COMPACTION_DATA";
import END_DATA from "./END_DATA";
import SOLID_DATA from "./SOLID_DATA";
import FLUID_DATA from "./FLUID_DATA";
import TERPENES_DATA from "./TERPENES_DATA";


const PAGE_DATA = {
  selection: {
    level: "top",
    index: 0,
    id: "selection",
    title: "Selection",
  },
  schematic: {
    level: "top",
    index: 1,
    id: "schematic",
    title: "Schematic",
  },

  sizes: {
    level: "sub",
    index: 0,
    id: "sizes",
    title: "Sizes",
  },
  paper: {
    level: "sub",
    index: 1,
    id: "paper",
    title: "Paper Type",
  },
  filter: {
    level: "sub",
    index: 2,
    id: "filter",
    title: "Filter Type",
  },
  compaction: {
    level: "sub",
    index: 3,
    id: "compaction",
    title: "Compaction",
  },
  end: {
    level: "sub",
    index: 4,
    id: "end",
    title: "End Type",
  },
  solid: {
    level: "sub",
    index: 5,
    id: "solid",
    title: "Solid Concentrates",
  },
  fluid: {
    level: "sub",
    index: 6,
    id: "fluid",
    title: "Fluid Concentrates",
  },
  terpenes: {
    level: "sub",
    index: 7,
    id: "terpenes",
    title: "Terpenes",
  },
};

// const PRODUCT_DATA_RAW = {
//   traditional: {
//     index: 1,
//     id: "traditional",

//     pages: {
//       selection: {
//         ...PAGE_DATA.selection,
//         ...SELECTION_DATA.traditional,
//         link: { page: "schematic", type: "traditional" },
//         // TODO: all the links should just reference themselves, its confusing here that selection links to a different page, i think that needs to be coded elsewhere
//       },

//       schematic: {
//         ...PAGE_DATA.schematic,
//         ...SCHEMATIC_DATA.traditional,
//         link: { page: "schematic", type: "traditional" },
//       },

//       sizes: {
//         ...PAGE_DATA.sizes,
//         ...SIZES_DATA.traditional,
//         link: { page: "sizes", type: "traditional" },
//       },

//       paper: {
//         ...PAGE_DATA.paper,
//         ...PAPER_DATA.traditional,
//         link: { page: "paper", type: "traditional" },
//       },

//       filter: {
//         ...PAGE_DATA.filter,
//         ...FILTER_DATA.traditional,
//         link: { page: "filter", type: "traditional" },
//       },

//       compaction: {
//         ...PAGE_DATA.compaction,
//         ...COMPACTION_DATA.traditional,
//         link: { page: "compaction", type: "traditional" },
//       },

//       end: {
//         ...PAGE_DATA.end,
//         ...END_DATA.traditional,
//         link: { page: "end", type: "traditional" },
//       },
//     },
//   },

//   // cigarette: {
//   //   index: 2,
//   //   id: "cigarette",
//   //   pages: {
//   //     selection: {
//   //       id: "cigarette",
//   //       index: 2,
//   //       title: {
//   //         short: "Cigarette",
//   //         long: "Cigarette Pre-Roll",
//   //       },

//   //       images: {
//   //         photo: SELECTION_IMGS.cigarette_photo,
//   //         vector: SELECTION_IMGS.cigarette_vector,
//   //       },
//   //       description:
//   //         "A cannabis cigarette pre-roll is a professionally packed, ready-to-smoke marijuana cigarette, offering consumers immediate convenience and consistency. For growers, pre-rolls efficiently utilize trim and small buds, presenting an additional revenue stream and branding opportunity in a familiar, accessible format.",
//   //       link: { page: "schematic", type: "cigarette" },
//   //     },
//   //     schematic: {
//   //       images: {
//   //         // photo: SELECTION_IMGS.traditional_photo,
//   //         // vector: SELECTION_IMGS.traditional_vector,
//   //       },
//   //     },

//   //     subpages: {
//   //       sizes: {
//   //         index: 1,
//   //         title: "Sizes",
//   //         options: ["0.25g - 1.0g"],
//   //       },
//   //     },
//   //   },
//   // },

//   // blunt: {
//   //   index: 3,
//   //   id: "blunt",
//   //   pages: {
//   //     selection: {
//   //       id: "blunt",
//   //       index: 3,
//   //       title: {
//   //         short: "Blunt",
//   //         long: "Blunt",
//   //       },

//   //       images: {
//   //         photo: SELECTION_IMGS.blunt_photo,
//   //         vector: SELECTION_IMGS.blunt_vector,
//   //       },
//   //       description:
//   //         "A blunt is a cannabis-filled cigar wrap, often offering a richer flavor and longer burn. For consumers, it provides a robust and extended smoking session. For growers, blunts tap into a niche market, blending traditional cigar culture with cannabis, offering unique branding and profit opportunities.",
//   //       link: { page: "schematic", type: "blunt" },
//   //     },
//   //     schematic: {
//   //       images: {
//   //         // photo: SELECTION_IMGS.traditional_photo,
//   //         // vector: SELECTION_IMGS.traditional_vector,
//   //       },
//   //     },
//   //     subpages: {
//   //       sizes: {
//   //         index: 1,
//   //         title: "Sizes",
//   //         options: ["0.25g - 1.0g"],
//   //       },
//   //     },
//   //   },
//   // },
//   // infused: {
//   //   index: 4,
//   //   id: "infused",
//   //   pages: {
//   //     selection: {
//   //       index: 4,
//   //       id: "infused",
//   //       title: {
//   //         short: "Infused",
//   //         long: "Infused Pre-Roll",
//   //       },

//   //       images: {
//   //         photo: SELECTION_IMGS.infused_photo,
//   //         vector: SELECTION_IMGS.infused_vector,
//   //       },
//   //       description:
//   //         "An infused pre-roll combines cannabis flower with concentrated forms like oils or kief, amplifying potency and flavor. For consumers, it delivers an enhanced, often more intense experience. For growers and producers, it offers a premium product line with higher profit margins, catering to experienced users seeking a stronger effect.",
//   //       link: { page: "schematic", type: "infused" },
//   //     },
//   //     schematic: {
//   //       images: {
//   //         // photo: SELECTION_IMGS.traditional_photo,
//   //         // vector: SELECTION_IMGS.traditional_vector,
//   //       },
//   //     },
//   //     subpages: {
//   //       sizes: {
//   //         index: 1,
//   //         title: "Sizes",
//   //         options: ["0.25g - 1.0g"],
//   //       },
//   //     },
//   //   },
//   // },
// };



const DATABASE = {
  selection: SELECTION_DATA,
  schematic: SCHEMATIC_DATA,
  sizes: SIZES_DATA,
  paper: PAPER_DATA,
  filter: FILTER_DATA,
  compaction: COMPACTION_DATA,
  end: END_DATA,
  solid: SOLID_DATA,
  fluid: FLUID_DATA,
  terpenes: TERPENES_DATA,
};



function constructProductData() {

  const data = {};

  const createPagesObject = (type, index) => {
    const pagesObject = {};

    for (const key in PAGE_DATA) {
      const databaseEntry = DATABASE[key][type];
      if (!databaseEntry) continue;
      pagesObject[key] = {
        link: { page: key, type: type },
        ...PAGE_DATA[key],
        ...databaseEntry, // Only spread if databaseEntry is found
      };
    }

    return pagesObject;

  };

  const processData = (type, index) => {
    return {
      id: type,
      index: index,
      pages: createPagesObject(type, index),
    };
  };

  PREROLL_TYPES.forEach((type, index) => {
    data[type] = processData(type, index);
  });

  return data;
}


const PRODUCT_DATA = constructProductData();



export {PAGE_DATA};
export default PRODUCT_DATA;
