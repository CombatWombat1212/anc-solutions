import React, { useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";
import Viewer from "./components/Viewer";
import ViewProvider from "./scripts/contexts/viewProvider";
import PrefetchImages from "./components/PrefetchImages";
import ICON_IMGS from "./data/ICON_IMGS";
import SCHEMATIC_IMGS from "./data/SCHEMATIC_IMGS";
import { ResponsiveProvider } from "./scripts/contexts/responsiveContext";
import useMirrorStyle from "./scripts/hooks/useMirrorStyle";
import { FILTER_DOCK_IMGS } from "./data/FILTER_IMGS";
import { SOLID_DOCK_IMGS } from "./data/SOLID_IMGS";
import { FLUID_DOCK_IMGS } from "./data/FLUID_IMGS";
import { END_DOCK_IMGS } from "./data/END_IMGS";
import { PAPER_DOCK_IMGS } from "./data/PAPER_IMGS";

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      // Create an observer for each font variation
      const urbaneNormal = new FontFaceObserver("urbane", { weight: "normal" });
      const urbaneItalic = new FontFaceObserver("urbane", { style: "italic" });
      const urbaneBold = new FontFaceObserver("urbane", { weight: "bold" });
      const acuminVariable = new FontFaceObserver("acumin-variable");

      // Wait for all fonts to be loaded
      try {
        await Promise.all([urbaneNormal.load(), urbaneItalic.load(), urbaneBold.load(), acuminVariable.load()]);
        setFontsLoaded(true);
      } catch (e) {
        console.error("One or more fonts failed to load:", e);
      }
    };

    loadFonts();
  }, []);

  useMirrorStyle();

  const imgs = 
  Object.values(ICON_IMGS)
  .concat(Object.values(SCHEMATIC_IMGS))
  .concat(Object.values(FILTER_DOCK_IMGS))
  .concat(Object.values(SOLID_DOCK_IMGS))
  .concat(Object.values(FLUID_DOCK_IMGS))
  .concat(Object.values(END_DOCK_IMGS))
  .concat(Object.values(PAPER_DOCK_IMGS))


  console.log('test');

  return (
    <Providers>
      <link rel="stylesheet" href="https://use.typekit.net/non3ahr.css" />
      <PrefetchImages images={Object.values(imgs)} />
      <div className={`sandbox ${!fontsLoaded ? "hidden-until-fonts-loaded" : ""}`}>
        <Viewer />
      </div>
    </Providers>
  );
}

function Providers({ children }) {
  return (
    <ViewProvider>
      <ResponsiveProvider>
        {children}
      </ResponsiveProvider>
    </ViewProvider>
  );
}

export default App;
