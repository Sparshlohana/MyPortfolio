import "./projects.css";
import bakaaa from "../../assets/images/bakaaa.png";
import dictionary from "../../assets/images/dictionary.png";
import checkyourGender from "../../assets/images/checkyourGender.png";
import weather from "../../assets/images/weather.png";

const Projects = () => {
  return (
    <div className="projectContainerElem">
      <div className="eachProjectContainer">
        <div className="projectHeadingContainer">
          <h2 className="projectHeading">Bakaaa</h2>
        </div>
        <hr />
        <div className="projectImage">
          <a
            href="https://bakaaa.redskull.me/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={bakaaa} alt="bakaaaImg" className="bakaaaImg" />
          </a>
        </div>
        <hr />
        <div className="projectDescription">
          <p className="projectDescriptionPara">
            This is my first Project, I have ever made. This is an infotainment
            website where you can watch and download anime for free.
          </p>
        </div>
      </div>

      <div className="eachProjectContainer">
        <div className="projectHeadingContainer">
          <h2 className="projectHeading">Dictionary</h2>
        </div>
        <hr />
        <div className="projectImage">
          <a
            href="https://dictionary.sparsh.tk/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={dictionary} alt="dictionaryImg" className="bakaaaImg" />
          </a>
        </div>
        <hr />
        <div className="projectDescription">
          <p className="projectDescriptionPara">
            This is a Dictionary which will make your work easy. It will search
            any word for you and give you lots of definitions.
          </p>
        </div>
      </div>

      <div className="eachProjectContainer">
        <div className="projectHeadingContainer">
          <h2 className="projectHeading">Check Your Gender</h2>
        </div>
        <hr />
        <div className="projectImage">
          <a
            href="https://checkyourgender.sparsh.tk/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={checkyourGender}
              alt="dictionaryImg"
              className="bakaaaImg"
            />
          </a>
        </div>
        <hr />
        <div className="projectDescription">
          <p className="projectDescriptionPara">
            This is a fun website which is made to know how much male/female are
            you. You can use it and enjoy it with your friends.
          </p>
        </div>
      </div>

      <div className="eachProjectContainer">
        <div className="projectHeadingContainer">
          <h2 className="projectHeading">Weather</h2>
        </div>
        <hr />
        <div className="projectImage">
          <a
            href="https://weather.sparsh.tk/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={weather} alt="dictionaryImg" className="bakaaaImg" />
          </a>
        </div>
        <hr />
        <div className="projectDescription">
          <p className="projectDescriptionPara">
            This is a website that tells you real time weather in any country,
            region or state. It is using weather API for getting accurate
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
