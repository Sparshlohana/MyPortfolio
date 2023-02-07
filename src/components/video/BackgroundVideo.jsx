import React from "react";
import video from "../../assets/videos/video.mp4";
import "./video.css";

const BackgroundVideo = () => {
  return (
    <video className="video" muted loop autoPlay>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
