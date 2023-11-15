import React, { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import Viewer from './components/Viewer';
import ViewProvider from './scripts/contexts/viewProvider';


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      // Create an observer for each font variation
      const urbaneNormal = new FontFaceObserver('urbane', { weight: 'normal' });
      const urbaneItalic = new FontFaceObserver('urbane', { style: 'italic' });
      const urbaneBold = new FontFaceObserver('urbane', { weight: 'bold' });
      const acuminVariable = new FontFaceObserver('acumin-variable');

      // Wait for all fonts to be loaded
      try {
        await Promise.all([
          urbaneNormal.load(),
          urbaneItalic.load(),
          urbaneBold.load(),
          acuminVariable.load(),
        ]);
        setFontsLoaded(true);
      } catch (e) {
        console.error('One or more fonts failed to load:', e);
      }
    };

    loadFonts();
  }, []);

  return (
    <ViewProvider>
      <link rel="stylesheet" href="https://use.typekit.net/non3ahr.css" />
      <div className={`sandbox ${!fontsLoaded ? 'hidden-until-fonts-loaded' : ''}`}>
        <Viewer />
      </div>
    </ViewProvider>
  );
}

export default App;
