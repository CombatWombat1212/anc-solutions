import Graphic from "../components/Graphic";
import { Body, H2, H3, H4 } from "../components/Text";

function Paper({ view }) {

  return (
    <>
      {view.dock && <Wrapper view={view} />}
    </>
  );
}





function Wrapper({view}) {
    const title = view.dock.title;
    const stats = view.dock.stats;
  
    return (
        <>
          <div className="paper--body">
            <div className="paper--title">
              <H3>{title}</H3>
            </div>

            <div className="paper--modal">
              {stats.map((stat, index) => (
                <div className="paper--stat" key={index}>
                  <H2 className="paper--h2">{stat.title}</H2>
                    {stat.description && <Description stat={stat} />}
                    {stat.bar && <Bar />}
                </div>
              ))}
            </div>
          </div>

          <div className="paper--visual">hey</div>
        </>
    );
}



function Description({stat}) {
    return (
        <Body className={'paper--description'}>{stat.description}</Body>
    );
}


function Bar() {
    return (
        <div>
            Enter
        </div>
    );
}




export default Paper;
