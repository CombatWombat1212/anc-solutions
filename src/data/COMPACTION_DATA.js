import COMPACTION_IMGS from "./COMPACTION_IMGS";




const COMPACTION_HIGH = "Perfect for cannabis with higher humidity levels or lower infusion, high compaction ensures the pre-roll maintains its structural integrity."
const COMPACTION_MEDIUM = "Ideal for cannabis with a moderate level of humidity or infusion, med compaction delivers a consistent burn rate suitable for a diverse range of cannabis types.";
const COMPACTION_LOW = "Suited for very dry milled cannabis or those with high infusion levels, low compaction provides a better-looking pre-roll with a more uniform shape.";




const COMPACTION_DATA = {
  traditional: {
    data: [
      {
        title: "High Compaction",
        label: "High",
        index: 0,
        image: COMPACTION_IMGS.traditional.high,
        description: COMPACTION_HIGH,
      },
      {
        title: "Medium Compaction",
        label: "Medium",
        index: 1,
        image: COMPACTION_IMGS.traditional.medium,
        description: COMPACTION_MEDIUM,
      },
      {
        title: "Low Compaction",
        label: "Low",
        index: 2,
        image: COMPACTION_IMGS.traditional.low,
        description: COMPACTION_LOW,
      },
    ],
  },
  cigarette: {
    data: [
      {
        title: "High Compaction",
        label: "High",
        index: 0,
        image: COMPACTION_IMGS.cigarette.high,
        description: COMPACTION_HIGH,
      },
      {
        title: "Medium Compaction",
        label: "Medium",
        index: 1,
        image: COMPACTION_IMGS.cigarette.medium,
        description: COMPACTION_MEDIUM,
      },
      {
        title: "Low Compaction",
        label: "Low",
        index: 2,
        image: COMPACTION_IMGS.cigarette.low,
        description: COMPACTION_LOW,
      },
    ],
  },
  infused: {
    data: [
      {
        title: "High Compaction",
        label: "High",
        index: 0,
        image: COMPACTION_IMGS.infused.high,
        description: COMPACTION_HIGH,
      },
      {
        title: "Medium Compaction",
        label: "Medium",
        index: 1,
        image: COMPACTION_IMGS.infused.medium,
        description: COMPACTION_MEDIUM,
      },
      {
        title: "Low Compaction",
        label: "Low",
        index: 2,
        image: COMPACTION_IMGS.infused.low,
        description: COMPACTION_LOW,
      },
    ],
  },

};

export default COMPACTION_DATA;
