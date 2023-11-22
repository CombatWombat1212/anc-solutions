import URL_PREFIX from "./WEBSITE_DATA";

const FLUID_IMGS = {
  blunt: {
    distillate: {
      name: "blunt_distillate",
      src: "/assets/images/fluid/blunt_distillate.svg",
      alt: "",
      width: 570,
      height: 562,
    },
    fso: {
      name: "blunt_fso",
      src: "/assets/images/fluid/blunt_fso.svg",
      alt: "",
      width: 570,
      height: 562,
    },
    htfse: {
      name: "blunt_htfse",
      src: "/assets/images/fluid/blunt_htfse.svg",
      alt: "",
      width: 570,
      height: 562,
    },
    live_rosin: {
      name: "blunt_live_rosin",
      src: "/assets/images/fluid/blunt_live_rosin.svg",
      alt: "",
      width: 570,
      height: 562,
    },
  },

  infused: {
    distillate: {
      name: "infused_distillate",
      src: URL_PREFIX + "/assets/images/fluid/infused_distillate.svg",
      alt: "",
      width: 500,
      height: 500,
    },
    fso: {
      name: "infused_fso",
      src: URL_PREFIX + "/assets/images/fluid/infused_fso.svg",
      alt: "",
      width: 500,
      height: 500,
    },
    htfse: {
      name: "infused_htfse",
      src: URL_PREFIX + "/assets/images/fluid/infused_htfse.svg",
      alt: "",
      width: 500,
      height: 500,
    },
    live_rosin: {
      name: "infused_live_rosin",
      src: URL_PREFIX + "/assets/images/fluid/infused_live_rosin.svg",
      alt: "",
      width: 500,
      height: 500,
    },
  },
};

const FLUID_DOCK_IMGS = {
  distillate: {
    name: "dock_distillate",
    src: URL_PREFIX + "/assets/images/fluid/dock_distillate.svg",
    alt: "",
    width: 54,
    height: 80,
  },
  fso: {
    name: "dock_fso",
    src: URL_PREFIX + "/assets/images/fluid/dock_fso.svg",
    alt: "",
    width: 133,
    height: 66,
  },
  htfse: {
    name: "dock_htfse",
    src: URL_PREFIX + "/assets/images/fluid/dock_htfse.svg",
    alt: "",
    width: 133,
    height: 66,
  },
  live_rosin: {
    name: "dock_live_rosin",
    src: URL_PREFIX + "/assets/images/fluid/dock_live_rosin.svg",
    alt: "",
    width: 120,
    height: 78,
  },
};

export { FLUID_DOCK_IMGS };

export default FLUID_IMGS;
