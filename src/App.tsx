// App.tsx
import React, { useState, Key, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Confetti from "react-dom-confetti";
import "./App.css";

import img1 from "./assets/1.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

const colors = [
  "red",
  "#ff6f2a",
  "#ffc942",
  "#95cca5",
  "#0087c0",
  "#9d988d",
  "violet",
  "#f580a5",
  "brown",
  "gray",
  "lightblue",
  "#a83727",
  "purple",
];

const App: React.FC = () => {
  const num = 8;
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [segments, setSegments] = useState(8);
  const [props, set] = useSpring(() => ({ scale: 1 }));

  const [confetti, setConfetti] = useState(false);
  const [confettiKey] = useState<Key>(Math.random());

  useEffect(() => {
    setSegments(Number(num));
  }, [num]);

  const spinWheel = () => {
    const rotation = Math.floor(Math.random() * 360);
    setRotation(rotation);
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, confettiConfig.duration);
    }, 3000);
  };

  const products = [img1, img3, img4, img5, img6];

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 20,
    elementCount: 100,
    dragFriction: 0.1,
    duration: 5000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="App">
      <img
        src="https://pinturaspintugama.com/wp-content/uploads/elementor/thumbs/cropped-Mesa-de-trabajo-1-qdclwmc976l3gzlulke8bgrr1z2rr7oyk5f1w9uk1a.jpg"
        alt=""
      />
      <div
        className={`wheel ${spinning ? "spinning" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {Array.from({ length: segments }, (_, index) => (
          <div
            key={index}
            className="segment"
            style={{
              backgroundColor: colors[index % colors.length],
              transform: `rotate(${index * (360 / segments)}deg)`,
            }}
          >
            <img
              src={products[index % products.length]}
              alt="Descripción de la imagen"
              className="segment-image"
              style={
                {
                  // width: "100%",
                  // height: "100%",
                }
              }
            />
          </div>
        ))}
      </div>
      <div className="indicator"></div>
      <div className="controls" style={{ zIndex: 2 }}>
        <animated.button
          style={{
            transform: props.scale.to((scale) => `scale(${scale})`),
            backgroundColor: "#ffd700",
            border: "none",
            color: "black",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "12px",
            boxShadow: "0 9px #999",
            transition: "transform 0.2s",
            textShadow: "1px 1px 2px black",
          }}
          onMouseDown={() => set({ scale: 0.8 })}
          onMouseUp={() => set({ scale: 1 })}
          onClick={spinWheel}
        >
          Girar la ruleta
        </animated.button>
        <Confetti active={confetti} config={confettiConfig} key={confettiKey} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Confetti active={confetti} config={confettiConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Confetti active={confetti} config={confettiConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Confetti active={confetti} config={confettiConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Confetti active={confetti} config={confettiConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Confetti active={confetti} config={confettiConfig} />
      </div>
    </div>
  );
};

export default App;
