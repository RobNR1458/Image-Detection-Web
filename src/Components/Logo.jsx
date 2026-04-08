import Tilt from "react-parallax-tilt";
import Logo_SmartBrain from "../assets/Logo_SmartBrain.png";
import { useState } from "react";

export default function Logo() {
  const [transitionSpeed, setTransitionSpeed] = useState(500);
  return (
    <Tilt
      className="relative top-2 left-3 flex size-16 items-center justify-center transform-3d"
      perspective={800}
      glareEnable={true}
      transitionSpeed={transitionSpeed}
      glareMaxOpacity={0.4}
      glarePosition="all"
      scale={1.2}
      glareBorderRadius="30px"
      onLeave={() => setTransitionSpeed(500)}
      onEnter={() => setTransitionSpeed(2000)}
    >
      <div className="flex size-13 transform-[translateZ(30px)] items-center justify-center">
        <img src={Logo_SmartBrain} alt="Logo_SmartBrain" />
      </div>
    </Tilt>
  );
}
