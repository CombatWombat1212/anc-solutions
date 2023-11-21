import BAR_LABELS from "./BAR_LABELS";
import { END_DOCK_IMGS } from "./END_IMGS";
import { FILTER_DOCK_IMGS } from "./FILTER_IMGS";
import { PAPER_DOCK_IMGS } from "./PAPER_IMGS";
import { SOLID_DOCK_IMGS } from "./SOLID_IMGS";
import URL_PREFIX from "./WEBSITE_DATA";

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
          description: "Wood pulp that has been processed and bleached.",
        },
        {
          title: "Appearance",
          type: "description",
          description: "Bright white due to the bleaching process.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 80, // Fast
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 50, // Medium
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 80, // Thick
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description: "Mild aftertaste due to the chemicals used in the bleaching process.",
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
          title: "Made From",
          type: "description",
          description: "Wood pulp without undergoing a bleaching process.",
        },
        {
          title: "Appearance",
          type: "description",
          description: "Natural brown or tan.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 60, // Medium
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 50, // Similar to bleached
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 80, // Thick
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description: "Faint wood or paper taste, subtly affecting the cannabis flavor.",
        },
      ],
    },

    hemp_organic: {
      id: "hemp_organic",
      title: "Hemp (organic)",
      img: PAPER_DOCK_IMGS.hemp_organic,
      link: { dock: "hemp_organic" },

      stats: [
        {
          title: "Made From",
          type: "description",
          description: "Fibers from the hemp plant, grown without synthetic chemicals or pesticides.",
        },
        {
          title: "Appearance",
          type: "description",
          description: "Natural, slightly speckled, ranging from light tan to darker brown.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 30, // Slower
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 40, // Lower
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 60, // Moderate
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description: "Minimal interference, preserving the cannabis's natural flavor.",
        },
      ],
    },

    bamboo: {
      id: "bamboo",
      title: "Bamboo (organic)",
      img: PAPER_DOCK_IMGS.bamboo,
      link: { dock: "bamboo" },
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
            value: 35, // Assuming Slow to Medium is a bit below medium
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 45, // Medium to Low
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 30, // Thin
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description: "Neutral, allowing the natural flavors of the cannabis to shine.",
        },
      ],
    },

    cellulose: {
      id: "cellulose",
      title: "Cellulose",
      img: PAPER_DOCK_IMGS.cellulose,
      link: { dock: "cellulose" },
      stats: [
        {
          title: "Made From",
          type: "description",
          description: "Derived from plant cellulose, often clear and transparent, unlike traditional rolling papers.",
        },
        {
          title: "Appearance",
          type: "description",
          description: "Transparent or semi-transparent, allowing users to see the cannabis inside.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 30, // Slow
          },
        },
        {
          title: "Porosity",
          type: "bar",
          bar: {
            labels: BAR_LABELS.level,
            value: 25, // Low
          },
        },
        {
          title: "Thickness",
          type: "bar",
          bar: {
            labels: BAR_LABELS.width,
            value: 20, // Very Thin
          },
        },
        {
          title: "Flavour Effect",
          type: "description",
          description:
            "Neutral to minimal, allowing for a pure cannabis flavor experience, though some users might detect a slight difference in taste or feel due to its unique texture.",
        },
      ],
    },

    hemp_wrap: {
      id: "hemp_wrap",
      title: "Hemp",
      img: PAPER_DOCK_IMGS.hemp_wrap,
      link: { dock: "hemp_wrap" },

      stats: [
        {
          title: "Material Origin",
          type: "description",
          description: "Derived from the industrial hemp plant, a relative of the cannabis plant.",
        },
        {
          title: "Texture & Thickness",
          type: "description",
          description: "Smooth and consistent, with a medium thickness, which makes it durable enough for easy rolling without tearing.",
        },
        {
          title: "Taste & Smell",
          type: "description",
          description: "Neutral with slight earthy undertones.",
        },
        {
          title: "Color",
          type: "description",
          description: "Natural light to dark green or brown, depending on processing.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 45,
          },
        },
      ],
    },

    hybrid_wrap: {
      id: "hybrid_wrap",
      title: "Hybrid",
      img: PAPER_DOCK_IMGS.hybrid_wrap,
      link: { dock: "hybrid_wrap" },

      stats: [
        {
          title: "Material Origin",
          type: "description",
          description: "A combination of natural hemp wraps and high-quality paper.",
        },
        {
          title: "Texture & Thickness",
          type: "description",
          description: "Balanced texture due to the blend of hemp and paper. Medium thickness offering a consistent roll.",
        },
        {
          title: "Taste & Smell",
          type: "description",
          description: "Neutral from the paper with a hint of earthiness from the hemp.",
        },
        {
          title: "Color",
          type: "description",
          description: "Light tan to pale green, depending on the blend and processing.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 50,
          },
        },
      ],
    },

    rose_petal: {
      id: "rose_petal",
      title: "Rose Petal",
      img: PAPER_DOCK_IMGS.rose_petal, // Replace with actual image reference
      link: { dock: "rose_petal" },

      stats: [
        {
          title: "Material Origin",
          type: "description",
          description: "Derived from dried rose petals, often layered together to achieve the necessary thickness.",
        },
        {
          title: "Texture & Thickness",
          type: "description",
          description: "Delicate with a naturally floral texture. Thin and requires careful handling.",
        },
        {
          title: "Taste & Smell",
          type: "description",
          description: "Distinct floral notes, imparting a gentle rose aroma when smoked.",
        },
        {
          title: "Color",
          type: "description",
          description: "Naturally reddish to dark brown or maroon, depending on the rose type and curing process.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 35, // Slow to medium
          },
        },
      ],
    },

    chamomile: {
      id: "chamomile",
      title: "Chamomile",
      img: PAPER_DOCK_IMGS.chamomile,
      link: { dock: "chamomile" },

      stats: [
        {
          title: "Material Origin",
          type: "description",
          description: "Made from dried chamomile flowers.",
        },
        {
          title: "Texture & Thickness",
          type: "description",
          description: "Somewhat delicate with a thin profile, requiring gentle handling.",
        },
        {
          title: "Taste & Smell",
          type: "description",
          description: "Herbal and calming, reminiscent of chamomile tea.",
        },
        {
          title: "Color",
          type: "description",
          description: "Light brown to golden yellow.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 30, // Slow
          },
        },
      ],
    },

    goji: {
      id: "goji",
      title: "Goji Wraps",
      img: PAPER_DOCK_IMGS.goji,
      link: { dock: "goji" },

      stats: [
        {
          title: "Material Origin",
          type: "description",
          description: "Derived from dried goji berries or sometimes the leaves of the goji plant.",
        },
        {
          title: "Texture & Thickness",
          type: "description",
          description: "Slightly rugged with a thin to medium profile.",
        },
        {
          title: "Taste & Smell",
          type: "description",
          description: "Sweet and tangy, with the distinctive goji berry aroma.",
        },
        {
          title: "Color",
          type: "description",
          description: "Reddish-brown to dark brown.",
        },
        {
          title: "Burn Rate",
          type: "bar",
          bar: {
            labels: BAR_LABELS.speed,
            value: 50, // Medium
          },
        },
      ],
    },
  },

  filter: {
    wood_spiral: {
      id: "wood_spiral",
      title: "Wood Spiral",
      img: FILTER_DOCK_IMGS.wood_spiral,
      link: { dock: "wood_spiral" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "This filter is crafted from bleached wood pulp paper and features a spiral pattern rolled into its design.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "The spiral design creates more surface area within the filter, allowing for better cooling of the smoke and a smoother draw. The bleached wood pulp paper is typically sturdy, ensuring the filter maintains its shape.",
        },
      ],
    },
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
          description:
            "The zigzag design provides more surface area than a straight ‘I’ design, allowing for improved cooling and filtration. The bleached wood pulp paper ensures durability.",
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
          description: "This filter is made from unbleached bamboo fibers and features the zigzag pattern.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "The natural bamboo offers a cleaner, eco-friendly aesthetic and might provide a purer flavor. The zigzag design enhances smoke cooling and consistent draw.",
        },
      ],
    },
    glass: {
      id: "glass",
      title: "Glass",
      img: FILTER_DOCK_IMGS.glass,
      link: { dock: "glass" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "A filter made of glass, typically clear or slightly tinted, designed for one-time use.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Glass filters can provide a very clean and pure draw, without any flavor alteration. The transparent nature offers a unique aesthetic, allowing users to see the smoke as it passes through.",
        },
      ],
    },
    aluminum: {
      id: "aluminum",
      title: "Aluminum",
      img: FILTER_DOCK_IMGS.aluminum,
      link: { dock: "aluminum" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "Consists of an aluminum casing filled with activated carbon particles.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Activated carbon is known to filter out many impurities and can significantly reduce the intake of harmful substances. This filter can provide a smoother, cleaner smoke and potentially reduce the harshness or coughing associated with smoking.",
        },
      ],
    },
    ceramic: {
      id: "ceramic",
      title: "Ceramic",
      img: FILTER_DOCK_IMGS.ceramic,
      link: { dock: "ceramic" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "Made from ceramic material, often with small channels or pores allowing smoke to pass through.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Ceramic filters can effectively cool down the smoke, providing a smoother experience. They're also reusable and can be a long-lasting choice for those looking for durability.",
        },
      ],
    },

    cardboard: {
      id: "cardboard",
      title: "Cardboard",
      img: FILTER_DOCK_IMGS.cardboard,
      link: { dock: "cardboard" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "Comprises multiple layers of cardboard compressed together, creating channels for air and smoke to pass through.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Provides a robust structure and good durability due to the compressed nature. Effective at filtering larger particles and ensuring a consistent draw.",
        },
      ],
    },
    cardboard_w: {
      id: "cardboard_w",
      title: "Cardboard W",
      img: FILTER_DOCK_IMGS.cardboard_w,
      link: { dock: "cardboard_w" },
      stats: [
        {
          title: "Description",
          type: "description",
          description:
            "Cardboard folded into a ‘W’ or 'Z' shape inside the cylindrical filter. This design is meant to increase the surface area inside the filter.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Better at cooling the smoke than the 'I' type due to increased surface area, and offers improved filtration of fine particles. Can also create a more consistent airflow.",
        },
      ],
    },

    foam_hallow: {
      id: "foam_hallow",
      title: "Foam Hallow",
      img: FILTER_DOCK_IMGS.foam_hallow,
      link: { dock: "foam_hallow" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "Made from a foam material, typically with a hollow tip or opening for improved airflow.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Lightweight and can provide a cooler and smoother smoking experience due to the foam's insulating properties. The hollow tip can also offer a more consistent draw.",
        },
      ],
    },

    foam_full: {
      id: "foam_full",
      title: "Foam Full",
      img: FILTER_DOCK_IMGS.foam_full,
      link: { dock: "foam_full" },
      stats: [
        {
          title: "Description",
          type: "description",
          description: "A solid foam filter without a hollow tip.",
        },
        {
          title: "Benefits",
          type: "description",
          description: "Offers a good balance between filtration and cooling of the smoke. The foam's consistency can also provide an even draw.",
        },
      ],
    },
  },

  end: {
    open: {
      id: "open",
      title: "Open",
      img: END_DOCK_IMGS.open,
      link: { dock: "open" },

      stats: [
        {
          title: "Description",
          type: "description",
          description:
            "As the name suggests, the end is left open, exposing the cannabis inside. It's similar to the end of a traditional cigarette.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Allows for easy and immediate lighting. The open end can also provide assurance to users about the quality and consistency of the cannabis inside, as they can see it directly.",
        },
      ],
    },

    crown: {
      id: "crown",
      title: "Crown",
      img: END_DOCK_IMGS.crown,
      link: { dock: "crown" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "This end style features a series of small folds or pleats that come together in a pattern resembling a crown.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "The Dutch Crown provides a sophisticated and elegant appearance, making it a distinctive choice for premium pre-rolls. Its design can also offer a secure seal, helping to preserve the freshness of the cannabis inside.",
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
          description: "The end is sealed by pressing or 'punching' it closed. This creates a flat, sealed end.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "Offers a clean and neat appearance, potentially protecting the cannabis inside from external contaminants and preserving freshness for a longer time.",
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
          description: "The end is twisted to a close, often resembling the tip of a traditional pre-roll.",
        },
        {
          title: "Benefits",
          type: "description",
          description:
            "This method provides a distinct, artisanal appearance, which can be seen as a sign of hand craftsmanship. The twist can be untwisted by users if they wish to inspect the contents before smoking.",
        },
      ],
    },
  },

  solid: {
    shatter: {
      id: "shatter",
      title: "Shatter",
      img: SOLID_DOCK_IMGS.shatter,
      link: { dock: "shatter" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "A stable, glass-like concentrate that can be fragmented and dispersed within pre-rolls to elevate THC levels and provide a consistent burn.",
        },
      ],
    },

    hash: {
      id: "hash",
      title: "Hash",
      img: SOLID_DOCK_IMGS.hash,
      link: { dock: "hash" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Compressed trichomes forming a pliable concentrate, introducing a traditional and robust flavor to pre-rolls and enhancing the overall potency.",
        },
      ],
    },

    kief: {
      id: "kief",
      title: "Kief",
      img: SOLID_DOCK_IMGS.kief,
      link: { dock: "kief" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Trichome-rich granules that, when sprinkled into pre-rolls, can enhance potency and flavor due to their concentrated cannabinoid and terpene content.",
        },
      ],
    },

    diamonds: {
      id: "diamonds",
      title: "Diamonds",
      img: SOLID_DOCK_IMGS.diamonds,
      link: { dock: "diamonds" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Ultra-pure THC or CBD crystals, offering a potent addition to pre-rolls and the potential for controlled dosing due to their consistent concentration.",
        },
      ],
    },

    isolate: {
      id: "isolate",
      title: "Isolate",
      img: SOLID_DOCK_IMGS.isolate,
      link: { dock: "isolate" },

      stats: [
        {
          title: "Description",
          type: "description",
          description: "Nearly 100% pure CBD or THC in crystalline form, elevating the potency of pre-rolls without altering the flavor profile.",
        },
      ],
    },
  },
};

export default DOCK_DATA;
