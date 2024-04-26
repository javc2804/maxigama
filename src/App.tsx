// App.tsx
import React, { useState } from "react";
import "./App.css";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "brown",
  "gray",
  "lightblue",
  "darkbrown",
  "purple", // color adicional
];

const App: React.FC = () => {
  const [prize, setPrize] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const prize = Math.floor(Math.random() * 91) + 10; // Genera un número aleatorio entre 10 y 100
    const color = colors[Math.floor(Math.random() * colors.length)]; // Selecciona un color aleatorio
    const rotation = Math.floor(Math.random() * 360); // Gira la ruleta a una posición aleatoria
    setPrize(prize);
    setColor(color);
    setRotation(rotation);
    setSpinning(true);
    setTimeout(() => setSpinning(false), 3000); // Detiene la animación después de 3 segundos
  };

  return (
    <div className="App">
      <div
        className={`wheel ${spinning ? "spinning" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            className="segment"
            style={{
              backgroundColor: color,
              transform: `rotate(${index * (360 / colors.length)}deg)`,
            }}
          ></div>
        ))}
      </div>
      <div className="indicator"></div> {/* Aquí está el indicador */}
      <button onClick={spinWheel}>Girar la ruleta</button>
      {prize && color && <p>¡Has ganado {prize}$!</p>}
    </div>
  );
};

export default App;
