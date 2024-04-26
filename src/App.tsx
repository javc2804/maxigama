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
  const [segments, setSegments] = useState(6); // Nuevo estado para la cantidad de segmentos

  const spinWheel = () => {
    const prize = Math.floor(Math.random() * 91) + 10; // Genera un número aleatorio entre 10 y 100
    const color = colors[Math.floor(Math.random() * segments)]; // Selecciona un color aleatorio basado en la cantidad de segmentos
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
        {Array.from({ length: segments }, (_, index) => (
          <div
            key={index}
            className="segment"
            style={{
              backgroundColor: colors[index % colors.length],
              transform: `rotate(${index * (360 / segments)}deg)`,
            }}
          ></div>
        ))}
      </div>
      <div className="indicator"></div> {/* Aquí está el indicador */}
      <div className="controls">
        {" "}
        {/* Nuevo div para los controles */}
        <button onClick={spinWheel}>Girar la ruleta</button>
        <select
          value={segments}
          onChange={(e) => setSegments(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {prize && color && <p>¡Has ganado {prize}$!</p>}
      </div>
    </div>
  );
};

export default App;
