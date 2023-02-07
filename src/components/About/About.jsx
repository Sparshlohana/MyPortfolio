import AboutHeading from "../AboutHeading/AboutHeading";
import PortfolioImage from "../Image/PortfolioImage";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import ResumeContainer from "../Resume-container/ResumeContainer";
import AboutSection from "../Section/AboutSection";
import SkillContainer from "../Skills-Container/SkillContainer";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <AboutHeading />
        <PortfolioImage />
        <AboutSection />
        <hr className="sectionHr" />
        <ProjectContainer />
        <hr className="sectionHr" />
        <ResumeContainer />
        <hr className="sectionHr" />
        <SkillContainer />
        <hr className="sectionHr" />
      </div>
    </>
  );
};

export default About;
