import "./app.css";
import AboutContainer from "./components/About-container/AboutContainer";
import NavBar from "./components/navbar/NavBar";
import BackgroundVideo from "./components/video/BackgroundVideo";

function App() {
  return (
    <div>
      <NavBar />
      <BackgroundVideo />
      <AboutContainer />
    </div>
  );
}

export default App;
