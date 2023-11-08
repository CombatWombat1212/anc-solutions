import ROLL_TYPE_IMGS from "./ROLL_TYPE_IMGS";

const PRODUCT_DATA = {
 
  
  ROLL_TYPES: {

    title: "Pre-Rolls",
    types: {
        traditional:{
            id: "traditional",
            index: 1,
            short: "Traditional",
            long: "Traditional Pre-Roll",
            images: {
                photo: ROLL_TYPE_IMGS.traditional_photo,
                vector: ROLL_TYPE_IMGS.traditional_vector,
            },
            description: "A traditional cannabis pre-roll is a ready-made joint, eliminating the need for manual rolling and grinding. For consumers, it promises immediate convenience and a consistent smoking experience. For growers, it represents an efficient use of product and a profitable avenue with strong branding potential.",
        }, 
        cigarette:{
            id: "cigarette",
            index: 2,
            short: "Cigarette",
            long: "Cigarette Pre-Roll",
            images: {
                photo: ROLL_TYPE_IMGS.cigarette_photo,
                vector: ROLL_TYPE_IMGS.cigarette_vector,
            },
            description: "A cannabis cigarette pre-roll is a professionally packed, ready-to-smoke marijuana cigarette, offering consumers immediate convenience and consistency. For growers, pre-rolls efficiently utilize trim and small buds, presenting an additional revenue stream and branding opportunity in a familiar, accessible format.",
        },
        blunt:{
            id: "blunt",
            index: 3,
            short: "Blunt",
            long: "Blunt",
            images: {
                photo: ROLL_TYPE_IMGS.blunt_photo,
                vector: ROLL_TYPE_IMGS.blunt_vector,
            },
            description: "A blunt is a cannabis-filled cigar wrap, often offering a richer flavor and longer burn. For consumers, it provides a robust and extended smoking session. For growers, blunts tap into a niche market, blending traditional cigar culture with cannabis, offering unique branding and profit opportunities.",
        },
        infused:{
            id: "infused",
            index: 4,
            short: "Infused",
            long: "Infused Pre-Roll",
            images: {
                photo: ROLL_TYPE_IMGS.infused_photo,
                vector: ROLL_TYPE_IMGS.infused_vector,
            },
            description: "An infused pre-roll combines cannabis flower with concentrated forms like oils or kief, amplifying potency and flavor. For consumers, it delivers an enhanced, often more intense experience. For growers and producers, it offers a premium product line with higher profit margins, catering to experienced users seeking a stronger effect.",
        },
     },

  },
};

export default PRODUCT_DATA;
