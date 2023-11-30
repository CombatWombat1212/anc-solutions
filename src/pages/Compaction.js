import { Body, H2 } from "../components/Text";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import SVG from "react-inlinesvg";
import useElementHeight from "../scripts/hooks/useElementHeight";
import { useEffect, useRef, useState } from "react";
import useIsResizing from "../scripts/hooks/useIsResizing";
import useAttrObserver from "../scripts/hooks/useAttrObserver";
import { useGraphicLoadManager, useGraphicLoadTracker } from "../scripts/hooks/useGraphicLoadManager";
import { animated, useSpring } from "react-spring";
import useKeyToggle from "../scripts/hooks/useKeyToggle";

function Compaction({ view }) {
  // Include 'loaded' state in initial state setup for compaction items
  const data = PRODUCT_DATA[view.type].pages["compaction"].data;
  const initialCompactionItemsState = data.map(() => ({
    visual: { loaded: false }, // Set initial 'loaded' state to false
    modal: null,
    animation: { complete: false },
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


  const [allColumnsAnimated, setAllColumnsAnimated] = useState(false);
  useEffect(() => {
    const atLeastOneTrue = compactionItems.some((item) => {
      return item.animation.complete;
    });
    setAllColumnsAnimated(atLeastOneTrue);
  }, [compactionItems]);

  const resizing = useIsResizing();

  const { graphicContainerProps } = useGraphicLoadManager(view, { count: data.length });


  return (
    <div
      className="compaction--body"
      style={{
        "--compaction-modal-height": `${tallestModal}px`,
      }}>
      {data.map((comp, index) => (
        <CompactionCol
          key={index}
          comp={comp}
          index={index}
          updateCompactionItem={updateCompactionItem}
          resizing={resizing}
          graphicContainerProps={graphicContainerProps}
          tallestModal={tallestModal}
          view={view}
          allColumnsAnimated={allColumnsAnimated}
        />
      ))}
    </div>
  );
}

function CompactionCol({ comp, index, updateCompactionItem, resizing, tallestModal, view, graphicContainerProps, allColumnsAnimated }) {



  const [animatedStart, setAnimatedStart] = useState(false);

  const handleAnimationStart = () => {
    setTimeout(() => {
    setAnimatedStart(true);
    }, 200);
  };

  const springStyle = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-1rem)",
    },
    to: {
      opacity: !view.pageLoading ? 1 : 0,
      transform: !view.pageLoading ? "translateX(0)" : "translateX(-1rem)",
    },
    delay: index * 100,
    onStart: handleAnimationStart, 
  });


  useEffect(() => {
    updateCompactionItem(index, "animation", { complete: animatedStart });
  }, [animatedStart]);

  
  const on = useKeyToggle();


  return (
    <animated.div className={`compaction--col compaction--col__${allColumnsAnimated ? "active" : "inactive" }`} key={index} style={springStyle}>
      <CompactionVisual comp={comp} index={index} updateCompactionItem={updateCompactionItem} resizing={resizing} {...graphicContainerProps} />
      <CompactionModal comp={comp} index={index} updateCompactionItem={updateCompactionItem} resizing={resizing} tallestModal={tallestModal} />
    </animated.div>
  );
}

function CompactionVisual({ comp, index, updateCompactionItem, resizing, ...props }) {
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

  const { graphicElementProps, handleTrackerLoad } = useGraphicLoadTracker(props, { key: comp.image.src, dependent: rollHeight > 0 });

  graphicElementProps.onLoad = () => {
    handleTrackerLoad();
    handleLoad();
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
          {...graphicElementProps}
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
