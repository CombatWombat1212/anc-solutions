import SCHEMATIC_IMGS from "./SCHEMATIC_IMGS";
import SELECTION_IMGS from "./SELECTION_IMGS";

const PRODUCT_DATA = {
  traditional: {
    index: 1,
    id: "traditional",

    pages: {
      selection: {
        id: "traditional",
        index: 1,
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

      schematic: {
        images: {
          vector: SCHEMATIC_IMGS.traditional,
        },
      },

      subpages: {
        sizes: {
          index: 1,
          id: "sizes",
          title: "Sizes",
          // options: ["0.25g - 1.0g"],
          link: { page: "sizes", type: "traditional" },
        },
        paper: {
          index: 2,
          id: "paper",
          title: "Paper Type",
          // options: ["i. Wood (white)", "ii. Wood (brown)", "iii. Organic Hemp", "iv. Bamboo", "v. Rice"],
          link: { page: "paper", type: "traditional" },
        },
        filter: {
          index: 3,
          id: "filter",
          title: "Filter Type",
          // options: ["i. Spiral", "ii. Zig Zag"],
          link: { page: "filter", type: "traditional" },
        },
        compaction: {
          index: 4,
          id: "compaction",
          title: "Compaction",
          link: { page: "compaction", type: "traditional" },
        },
        end: {
          index: 5,
          id: "end",
          title: "End Type",
          // options: ["i. Twisted", "ii. Punched", "iii. Crown"],
          link: { page: "end", type: "traditional" },
        },
      },
    },
  },

  cigarette: {
    index: 2,
    id: "cigarette",
    pages: {
      selection: {
        id: "cigarette",
        index: 2,
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
      schematic: {
        images: {
          // photo: SELECTION_IMGS.traditional_photo,
          // vector: SELECTION_IMGS.traditional_vector,
        },
      },

      subpages: {
        sizes: {
          index: 1,
          title: "Sizes",
          options: ["0.25g - 1.0g"],
        },
      },
    },
  },

  blunt: {
    index: 3,
    id: "blunt",
    pages: {
      selection: {
        id: "blunt",
        index: 3,
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
      schematic: {
        images: {
          // photo: SELECTION_IMGS.traditional_photo,
          // vector: SELECTION_IMGS.traditional_vector,
        },
      },
      subpages: {
        sizes: {
          index: 1,
          title: "Sizes",
          options: ["0.25g - 1.0g"],
        },
      },
    },
  },
  infused: {
    index: 4,
    id: "infused",
    pages: {
      selection: {
        index: 4,
        id: "infused",
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
      schematic: {
        images: {
          // photo: SELECTION_IMGS.traditional_photo,
          // vector: SELECTION_IMGS.traditional_vector,
        },
      },
      subpages: {
        sizes: {
          index: 1,
          title: "Sizes",
          options: ["0.25g - 1.0g"],
        },
      },
    },
  },
};

const processSidebar = (productData, pageData) => {
  // Loop through all page data entries
  for (const [pageKey, pageValue] of Object.entries(pageData)) {
    // Check if the page has a sidebar and process it
    if (pageValue.sidebar) {
      // Map each sidebar item to include the parent id
      pageValue.sidebar = pageValue.sidebar.map((sidebarItem) => {
        // Find the parent product data entry
        for (const [productKey, productValue] of Object.entries(productData)) {
          if (productValue.pages[pageKey]) {
            return {
              ...sidebarItem,
              id: productData[productKey].id,
            };
          }
        }
      });
    }
  }
};

export default PRODUCT_DATA;
