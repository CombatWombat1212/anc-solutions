import { Body, H2 } from "../components/Text";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import SVG from "react-inlinesvg";
import useElementHeight from "../scripts/hooks/useElementHeight";
import { useEffect, useRef, useState } from "react";
import useIsResizing from "../scripts/hooks/useIsResizing";

function Compaction({ view }) {
  const data = PRODUCT_DATA[view.type].pages["compaction"].data;
  const [compactionItems, setCompactionItems] = useState(data.map(() => ({ visual: null, modal: null })));
  const [tallestModal, setTallestModal] = useState(0);

  const updateCompactionItem = (index, type, ref, height, loaded = null) => {
    setCompactionItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        [type]: { ref, height, loaded },
      };
      return newItems;
    });
  };

  // Calculate and set the tallest modal height after compactionItems updates
  useEffect(() => {
    const tallest = compactionItems.reduce((maxHeight, item) => {
      return item.modal && item.modal.height > maxHeight ? item.modal.height : maxHeight;
    }, 0);
    setTallestModal(tallest);
  }, [compactionItems]); // This effect should depend on compactionItems

  return (
    <div
      className="compaction--body"
      style={{
        "--compaction-modal-height": `${tallestModal}px`,
      }}>
      {data.map((comp, index) => (
        <div className="compaction--col" key={index}>
          <CompactionVisual comp={comp} index={index} updateCompactionItem={updateCompactionItem} />
          <CompactionModal comp={comp} index={index} updateCompactionItem={updateCompactionItem} tallestModal={tallestModal} />
        </div>
      ))}
    </div>
  );
}

function CompactionVisual({ comp, index, updateCompactionItem }) {
  const reference = useRef(null);
  const height = useElementHeight(reference);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    updateCompactionItem(index, "visual", reference, height);
  }, [height]);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="compaction--visual" ref={reference}>
      <div className="compaction--graphic">
        <SVG className="compaction--svg" src={comp.image.src} width={comp.image.width} height={comp.image.height} alt={comp.image.alt} onLoad={handleLoad} />
      </div>
      <div className="compaction--brace"></div>
    </div>
  );
}

function CompactionModal({ comp, index, updateCompactionItem, tallestModal }) {
  const reference = useRef(null);
  const height = useElementHeight(reference);

  useEffect(() => {
    updateCompactionItem(index, "modal", reference, height);
  }, [height]);

  const resizing = useIsResizing();

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
