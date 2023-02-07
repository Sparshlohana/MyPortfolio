import React from "react";
import ResumeHeading from "../Resume-Heading/ResumeHeading";
import ResumeDownload from "../Resume-download/ResumeDownload";

const ResumeContainer = () => {
  return (
    <div className="ResumeContainer">
      <ResumeHeading />
      <ResumeDownload />
    </div>
  );
};

export default ResumeContainer;
