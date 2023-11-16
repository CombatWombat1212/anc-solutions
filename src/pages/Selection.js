import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { splitS } from "../scripts/Split";
import useInOut from "../scripts/hooks/useInOut";
import { Body, H2 } from "../components/Text";
import Graphic from "../components/Graphic";
import useElementHeight from "../scripts/hooks/useElementHeight";
import Link from "../components/Link";

function Selection({ view }) {
  const selectionArray = Object.values(PRODUCT_DATA);


  const [description, setDescription] = useState(false);
  const [delayedActive, setDelayedActive] = useState(view.side.active);

  useEffect(() => {
    let timer;
    const val = PRODUCT_DATA[view.side.active] ? view.side.active : false;
    if (view.side.active) {
      setDelayedActive(val); 
    } else {
      timer = setTimeout(() => {
        setDelayedActive(val);
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [view.side.active]);



  useEffect(() => {
    if (!delayedActive || !PRODUCT_DATA[delayedActive]) return;
    setDescription(PRODUCT_DATA[delayedActive].pages["selection"].description);
  }, [delayedActive]);

  const modalState = useInOut(delayedActive);

  const [modals, setModals] = useState([]);
  const [tallestModal, setTallestModal] = useState(0);

  useEffect(() => {
    const tallest = modals.reduce((maxHeight, modal) => {
      return modal.height > maxHeight ? modal.height : maxHeight;
    }, 0);
    setTallestModal(tallest);
  }, [modals]);

  const [graphics, setGraphics] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (graphics.length === selectionArray.length) {
      const allLoaded = graphics.reduce((allLoaded, graphic) => {
        return allLoaded && graphic.loaded;
      }, true);
      setLoaded(allLoaded);
    } else {
      setLoaded(false);
    }
  }, [graphics, selectionArray.length]);

  useEffect(() => {
    if (loaded && tallestModal !== 0) {
      view.setPageLoading(false);
    }
  }, [loaded, tallestModal]);


  return (
    <>
      {/* <div className={`selection--body selection--body__${ready ? "loaded" : "loading"}`} */}
      <div
        className={`selection--body`}
        style={{
          "--selection-modal-height": `${tallestModal}px`,
        }}>
        {selectionArray.map((type, i) => (
          <Column type={type} graphics={graphics} setGraphics={setGraphics} active={delayedActive} view={view} key={i} />
        ))}
      </div>
      <div className="selection--description">
        <Modal description={description} state={modalState} />

        {selectionArray.map((type, i) => {
          return <HiddenModal description={type.pages["selection"].description} state="hidden" modals={modals} setModals={setModals} key={i} />;
        })}
      </div>
    </>
  );
}

function Column({ view, type, graphics, setGraphics, active }) {
  const handleMouseEnter = () => view.side.setActive(type.id);
  const handleMouseLeave = () => view.side.setActive(false);

  const handleClick = (e) => {
    view.setPage(type.pages.selection.link.page);
    view.setType(type.id);
  };

  return (
    <Link
      className={`content--col selection--col`}
      key={type.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-roll-type={type.id}
      onClick={handleClick}>
      <SelectionHead type={type} active={active} />
      <Visual type={type} active={active} graphics={graphics} setGraphics={setGraphics} />
    </Link>
  );
}

function HiddenModal({ description, state, modals, setModals }) {
  const referece = useRef(null);
  const height = useElementHeight(referece);

  useEffect(() => {
    const modal = {
      ref: referece,
      height: height,
    };
    setModals((prevModals) => {
      const otherModals = prevModals.filter((m) => m.ref.current !== referece.current);
      return [...otherModals, modal];
    });
  }, [height]);

  return <Modal description={description} state={state} reference={referece} />;
}

function Modal({ description, state, reference = null }) {
  return (
    <div className={`selection--modal selection--modal__${state}`} ref={reference}>
      <Body>{description}</Body>
    </div>
  );
}

function SelectionHead({ type, active, className="" }) {
  const [style, setStyle] = useState("idle");

  useEffect(() => {
    if (active) {
      setStyle(type.id === active ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  const title = type.pages["selection"].title.short;
  const index = String(type.index + 1).padStart(2, "0");

  return (
    <div className={`selection--head selection--head__${style} ${className || ""}`}>
      <H2 className={"selection--label__main"}>{title}</H2>
      <H2 className={"selection--label__sub"}>Figure {index}</H2>
    </div>
  );
}

function Visual({ type, active, graphics, setGraphics }) {
  const [style, setStyle] = useState("idle");

  const imgs = type.pages["selection"].images;

  useEffect(() => {
    if (active) {
      setStyle(type.id === active ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  const [vecLoaded, setVecLoaded] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [graphicsLoaded, setGraphicsLoaded] = useState(false);

  const vecRef = useRef(null);
  const photoRef = useRef(null);

  const handleLoad = (e) => {
    if (e.currentTarget === vecRef.current) {
      setVecLoaded(true);
    } else if (e.currentTarget === photoRef.current) {
      setPhotoLoaded(true);
    }
  };

  useEffect(() => {
    if (!vecLoaded || !photoLoaded) return;
    setGraphicsLoaded(true);
  }, [vecLoaded, photoLoaded]);

  useEffect(() => {
    const graphic = {
      ref: { vec: vecRef, photo: photoRef },
      loaded: graphicsLoaded,
    };
    setGraphics((prevGraphics) => {
      // const otherGraphics = prevGraphics.filter((m) => m.ref.current !== referece.current);
      const otherGraphics = prevGraphics.filter((m) => m.ref.vec.current !== vecRef.current || m.ref.photo.current !== photoRef.current);
      return [...otherGraphics, graphic];
    });
  }, [graphicsLoaded]);

  return (
    <div className="selection--visual">
      <Graphic
        className={`selection--graphic selection--graphic-photo__${style} selection--graphic-photo selection--graphic__${style}`}
        img={imgs.photo}
        reference={vecRef}
        onLoad={handleLoad}
      />
      <Graphic
        className={`selection--graphic selection--graphic-vector__${style} selection--graphic-vector selection--graphic__${style}`}
        img={imgs.vector}
        reference={photoRef}
        onLoad={handleLoad}
      />
    </div>
  );
}



export {SelectionHead};
export default Selection;
