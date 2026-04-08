import "./App.css";
import Navigation from "./Components/Navigation.jsx";
import Logo from "./Components/Logo.jsx";
import ImageLinkForm from "./Components/ImageLinkForm.jsx";
import Rank from "./Components/Rank.jsx";
import ParticlesBg from "particles-bg";
/* import FaceRecognition from "./Components/FaceRecognitio n.jsx";*/

function App() {
  return (
    <div className="grid h-screen grid-cols-6 grid-rows-2">
      <div className="col-span-full flex flex-row justify-between">
        <Logo></Logo>
        <Rank></Rank>
        <Navigation></Navigation>
      </div>
      <ImageLinkForm></ImageLinkForm>
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} num={60} />
      {/*   
  <FaceRecognition></FaceRecognition> */}
    </div>
  );
}
export default App;
