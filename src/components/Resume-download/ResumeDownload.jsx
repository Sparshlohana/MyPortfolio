import React, { useState } from "react";
import resume from "../../assets/resume/resume.pdf";
import "./resumeDownload.css";
import resumePic from "../../assets/images/resumePic.jpg";

const DownloadButton = () => {
  const [downloadStatus, setDownloadStatus] = useState("Download from here..");

  const handleDownload = () => {
    setDownloadStatus("Downloading...");

    // const url = "https://example.com/file.txt";
    const url = resume;

    // Create a new hidden anchor element
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "resume.pdf";

    // Append the anchor element to the document body
    document.body.appendChild(a);

    // Trigger the download
    a.click();

    // Remove the anchor element from the document body
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloadStatus("Downloaded");
    }, 2000);
  };

  return (
    <div className="resumeDownloadContainer">
      <img src={resumePic} alt="resumePic" className="resumePic" />
      <button className="downloadBtn" onClick={handleDownload}>
        Click here to download
      </button>
      <p className="downloadContent">{downloadStatus}</p>
    </div>
  );
};

export default DownloadButton;
