import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { splitS } from "../scripts/Split";
import useInOut from "../scripts/hooks/useInOut";
import { Body, H2 } from "../components/Text";
import Graphic from "../components/Graphic";

function Selection({ view }) {
  const selectionArray = Object.values(PRODUCT_DATA);

  const [active, setActive] = useState(false);
  const [description, setDescription] = useState(false);

  const setActiveByTypeRef = useRef(); // Create a ref to store the timeout ID

  const setActiveByType = (input) => {
    let rollType = false;
    if (input === false || input === null) {
      rollType = false;
    } else if (typeof input === "string") {
      rollType = PRODUCT_DATA[input] ? PRODUCT_DATA[input] : false;
    } else if (input && input.currentTarget.dataset.rollType) {
      rollType = PRODUCT_DATA[input.currentTarget.dataset.rollType] ? PRODUCT_DATA[input.currentTarget.dataset.rollType] : false;
    }

    const timeoutDur = view.pageRef.current ? getComputedStyle(view.pageRef.current).getPropertyValue("--selection-mouse-leave-timeout") : "200ms";
    const timeout = splitS(timeoutDur);

    clearTimeout(setActiveByTypeRef.current); // Clear any existing timeouts
    if (rollType) {
      setActive(rollType);
    } else {
      setActiveByTypeRef.current = setTimeout(() => {
        setActive(rollType); // Only set to false if not interrupted by a new roll
      }, timeout);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(setActiveByTypeRef.current);
    };
  }, []);

  useEffect(() => {
    setActiveByType(view.side.active);
  }, [view.side.active]);

  useEffect(() => {
    if (!active) return;
    setDescription(active.pages["selection"].description);
  }, [active]);

  const modalState = useInOut(active);

  const handleMouseEnter = (e) => {
    setActiveByType(e);
  };

  const handleMouseLeave = () => {
    setActiveByType(false);
  };

  const handleClick = (e) => {
    const elemType = PRODUCT_DATA[e.currentTarget.dataset.rollType];
    const page = elemType.pages["selection"].link.page;
    const type = elemType.pages["selection"].link.type;
    console.log(page);
    view.setPage("schematic");
    view.setType(type);
  };



  return (
    <>
      <div className="selection--body">
        {selectionArray.map((type) => (
          <a
            className={`content--col selection--col`}
            key={type.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-roll-type={type.id}
            onClick={handleClick}>
            <Head type={type} active={active} />
            <Visual type={type} active={active} />
          </a>
        ))}
      </div>
      <div className="selection--description">
        <div className={`selection--modal selection--modal__${modalState}`}>
          <Body>{description}</Body>
        </div>
      </div>
    </>
  );
}

function Head({ type, active }) {
  const [style, setStyle] = useState("idle");

  useEffect(() => {
    if (active) {
      setStyle(type.id === active.id ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  const title = type.pages["selection"].title.short;

  return (
    <div className={`selection--head selection--head__${style}`}>
      <H2 className={"selection--label__main"}>{title}</H2>
      <H2 className={"selection--label__sub"}>Figure {String(type.index).padStart(2, "0")}</H2>
    </div>
  );
}

function Visual({ type, active }) {
  const [style, setStyle] = useState("idle");

  const imgs = type.pages["selection"].images;

  useEffect(() => {
    if (active) {
      setStyle(type.id === active.id ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  return (
    <div className="selection--visual">
      <Graphic
        className={`selection--graphic selection--graphic-photo__${style} selection--graphic-photo selection--graphic__${style}`}
        img={imgs.photo}
      />
      <Graphic
        className={`selection--graphic selection--graphic-vector__${style} selection--graphic-vector selection--graphic__${style}`}
        img={imgs.vector}
      />
    </div>
  );
}

export default Selection;
