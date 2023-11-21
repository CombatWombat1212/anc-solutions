import { Body, H2 } from "../components/Text";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import SVG from "react-inlinesvg";
import useElementHeight from "../scripts/hooks/useElementHeight";
import { useEffect, useRef, useState } from "react";
import useIsResizing from "../scripts/hooks/useIsResizing";
import useAttrObserver from "../scripts/hooks/useAttrObserver";

function Compaction({ view }) {
  // Include 'loaded' state in initial state setup for compaction items
  const data = PRODUCT_DATA[view.type].pages["compaction"].data;
  const initialCompactionItemsState = data.map(() => ({
    visual: { loaded: false }, // Set initial 'loaded' state to false
    modal: null,
  }));

  const [compactionItems, setCompactionItems] = useState(initialCompactionItemsState);
  const [tallestModal, setTallestModal] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  const updateCompactionItem = (index, type, updates) => {
    setCompactionItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index][type] = { ...newItems[index][type], ...updates };
      return newItems;
    });
  };

  useEffect(() => {
    const tallest = compactionItems.reduce((maxHeight, item) => {
      return item.modal && item.modal.height > maxHeight ? item.modal.height : maxHeight;
    }, 0);
    setTallestModal(tallest);
  }, [compactionItems]);

  useEffect(() => {
    const allLoaded = compactionItems.reduce((allLoaded, item) => {
      return allLoaded && item.visual.loaded;
    }, true);
    setAllLoaded(allLoaded);
  }, [compactionItems]);

  const resizing = useIsResizing();

  return (
    <div
      className="compaction--body"
      style={{
        "--compaction-modal-height": `${tallestModal}px`,
      }}>
      {data.map((comp, index) => (
        <div className="compaction--col" key={index}>
          <CompactionVisual comp={comp} index={index} updateCompactionItem={updateCompactionItem} resizing={resizing} />
          <CompactionModal comp={comp} index={index} updateCompactionItem={updateCompactionItem} resizing={resizing} tallestModal={tallestModal} />
        </div>
      ))}
    </div>
  );
}

function CompactionVisual({ comp, index, updateCompactionItem, resizing }) {
  const reference = useRef(null);
  const height = useElementHeight(reference);
  const [rollHeight, setRollHeight] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // updateCompactionItem(index, "visual", { ref: reference, height: height, loaded: loaded, rollHeight: rollHeight });
    updateCompactionItem(index, "visual", { ref: reference, height: height, loaded: loaded });
  }, [height, loaded]);

  useEffect(() => {
    if (!loaded) return;
    const visual = reference.current;

    setTimeout(() => {
      const roll = visual.querySelector("#Roll") || visual.querySelector("#roll");
      const rollHeight = roll.getBoundingClientRect().height;

      setRollHeight(rollHeight);
    }, 100);
  }, [loaded, height, resizing]);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className="compaction--visual"
      ref={reference}
      style={{
        "--roll-height": `${rollHeight}px`,
      }}>
      <div className="compaction--graphic">
        <SVG
          className="compaction--svg"
          src={comp.image.src}
          width={comp.image.width}
          height={comp.image.height}
          alt={comp.image.alt}
          onLoad={handleLoad}
        />
      </div>

      <div className="compaction--brace-wrapper">
        <div className="compaction--brace-inner">
          <div className="compaction--brace"></div>
          <div className="compaction--line">
            <div className="compaction--dot"></div>
            <Body className="compaction--label">{comp.label}</Body>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactionModal({ comp, index, updateCompactionItem, tallestModal, resizing }) {
  const reference = useRef(null);
  const height = useElementHeight(reference);

  useEffect(() => {
    updateCompactionItem(index, "modal", { ref: reference, height: height });
  }, [height]);

  return (
    <div
      className="compaction--modal-wrapper"
      style={{
        "--height": resizing ? "auto" : `${tallestModal}px`,
      }}>
      <div className="compaction--modal" ref={reference}>
        <H2>{comp.title}</H2>
        <Body>{comp.description}</Body>
      </div>
    </div>
  );
}

export default Compaction;
