import { useEffect, useRef, useState } from "react";
import Graphic from "../components/Graphic";
import { Body, H2, H3, H4, Label2 } from "../components/Text";
import useAttrObserver from "../scripts/hooks/useAttrObserver";
import useElementStyle from "../scripts/hooks/useElementStyle";
import PAPER_IMGS from "../data/PAPER_IMGS";
import SVG from "react-inlinesvg";

function Paper({ view }) {
  return <>{view.dock && <Wrapper view={view} />}</>;
}
function Wrapper({ view }) {
    const img = PAPER_IMGS[view.type];
  
    const title = view.dock.title;
    const stats = view.dock.stats;
  
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
  
    const modal = useRef(null);
    const rowCount = useElementStyle(modal, "--viewer-modal-rows");
    const colCount = useElementStyle(modal, "--viewer-modal-columns");
  
    useEffect(() => {
      if (rowCount && !isNaN(Number(rowCount))) {
        setRows(Number(rowCount));
      } else {
        setRows(0);
      }
    }, [rowCount]);
  
    useEffect(() => {
      if (colCount && !isNaN(Number(colCount))) {
        setColumns(Number(colCount));
      } else {
        setColumns(0);
      }
    }, [colCount]);
  
    // Function to check the type of current and previous rows
    const checkRowType = (rowIndex) => {
      const startIndex = rowIndex * columns;
      const endIndex = startIndex + columns;
      const rowStats = stats.slice(startIndex, endIndex);
  
      const isAllBar = rowStats.every((stat) => stat.type === "bar");
      const isPrevAllBar = rowIndex > 0 && stats.slice((rowIndex - 1) * columns, startIndex).every((stat) => stat.type === "bar");
      const isPrevRowMixed = rowIndex > 0 && !isPrevAllBar; // Check if previous row is not all bar
  
      return {
        isAllBar: isAllBar,
        isPrevAllBar: isPrevAllBar,
        isPrevRowMixed: isPrevRowMixed,
      };
    };
  
    return (
      <>
        <div className="paper--body">
          <div className="paper--title">
            <H3>{title}</H3>
          </div>
  
          <div className="paper--modal" ref={modal}>
            {stats.map((stat, index) => {
              const rowIndex = Math.floor(index / columns);
              const rowType = checkRowType(rowIndex);
              let className = "";
  
              if (rowType.isAllBar && rowType.isPrevRowMixed) {
                className = "paper--stat-row__bar";
              } else if (rowType.isPrevAllBar) {
                className = "paper--stat-row__after-bar";
              }
  
              return <Stat stat={stat} key={index} className={className} />;
            })}
          </div>
        </div>
  
        <div className="paper--visual">
          <SVG
            className="paper--graphic"
            src={img.src}
            width={img.width} // Fixed attribute order, it should be width then height
            height={img.height}
          />
        </div>
      </>
    );
  }
  
function Stat({ stat, className }) {
  return (
    <div className={`paper--stat paper--stat__${stat.type} ${className}`}>
      <H2 className="paper--h2">{stat.title}</H2>
      {stat.description && <Description stat={stat} />}
      {stat.bar && <Bar stat={stat} />}
    </div>
  );
}

function Description({ stat }) {
  return <Body className={"paper--description"}>{stat.description}</Body>;
}

function Bar({ stat }) {
  return (
    <div
      className="bar--wrapper"
      style={{
        "--bar-value": stat.bar.value,
        "--bar-value_percent": stat.bar.value + "%",
        "--bar-label-count": stat.bar.labels.length,
      }}>
      <div className="bar">
        <div className="bar--value"></div>
      </div>
      <div className="bar--x">
        {stat.bar.labels.map((label, index) => (
          <div className="bar--label" key={index}>
            <div className="bar--notch">
              <Label2 className="bar--text">{label}</Label2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paper;
