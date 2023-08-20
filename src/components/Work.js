import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCradData";

const Work = (props) => {
  return <div className="work-container">
    <h1 className="project-heading">How we are helping?</h1>
    <div className="project-container">
      {WorkCardData.map((val, ind) => {
        return <WorkCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />;
      })};
    </div>
  </div>;
};

export default Work;
