import myImage from "../../assets/images/me.jpg";
import "./portfolioImage.css";

const PortfolioImage = () => {
  return (
    <div className="imageContainer">
      <img src={myImage} alt="portfolioImage" className="portfolioImage" />
    </div>
  );
};

export default PortfolioImage;
