import "./App.css";
import { useState, useRef } from "react";
import Navigation from "./Components/Navigation.jsx";
import Logo from "./Components/Logo.jsx";
import ImageLinkForm from "./Components/ImageLinkForm.jsx";
import Rank from "./Components/Rank.jsx";
import ParticlesBg from "particles-bg";
import clarifaiRequest from "./clarifai_config.js";
import FaceRecognition from "./Components/FaceRecognition.jsx";
import SignIn from "./Components/SignIn.jsx";
import Register from "./Components/Register.jsx";

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState([]);
  const imageRef = useRef(null);
  const [route, setRoute] = useState("signin");

  const OnImageLinkAdded = (value) => {
    setInput(value);
  };

  const onSubmitImage = async () => {
    if (!input) return;
    setImageUrl(input);
    setInput("");
    try {
      const response = await clarifaiRequest(input);
      displayFaceBox(calculateFaceLocation(response));
    } catch (error) {
      console.error(error);
    }
  };

  const calculateFaceLocation = (data) => {
    const width = imageRef.current.width;
    const height = imageRef.current.height;
    const clarifaiFace = data.outputs[0].data.regions.map((region) => {
      const faceColumns = region.region_info.bounding_box;
      return {
        leftCol: faceColumns.left_col * width,
        topRow: faceColumns.top_row * height,
        rightCol: width - faceColumns.right_col * width,
        bottomRow: height - faceColumns.bottom_row * height,
      };
    });
    return clarifaiFace;
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <>
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} num={60} />
      {route === "home" ? (
        <div className="grid max-h-screen grid-cols-6 grid-rows-3">
          <div className="col-span-full flex flex-row justify-between">
            <Logo></Logo>
            <Rank></Rank>
            <Navigation onRouteChange={onRouteChange}></Navigation>
          </div>
          <ImageLinkForm
            ImageLink={input}
            onImageLinkAdded={OnImageLinkAdded}
            onSubmitImage={onSubmitImage}
          ></ImageLinkForm>
          {/*Renderizado condicional para no generar error cuando no hay link*/}
          {imageUrl && (
            <FaceRecognition
              ref={imageRef}
              imageUrl={imageUrl}
              box={box}
            ></FaceRecognition>
          )}
        </div>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
