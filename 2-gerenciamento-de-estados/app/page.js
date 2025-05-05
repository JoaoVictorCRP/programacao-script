"use client";
import Image from "next/image";
import { useState } from "react";
import NumberDisplay from "./components/NumberDisplay.jsx";

export default function Home() {
  const [numbers, setNumbers] = useState(['?','?','?','?','?']);

    const generateNumbers = () => {
        const sorted = Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 60 + 1)
        )
            .sort((a, b) => a - b) // ordenar em ordem decrescente (a - b forçara comparação numérica, e não em string)
            .map((num) => String(num).padStart(2, "0")); // formatar números para que sempre tenham dois digítos (ex: 1 -> 01)

        setNumbers(sorted);
    };

  return (
      <main className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-900 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl font-bold mb-8">Mega Sena</h1>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
              {numbers.map((number, index) => (
                  <NumberDisplay key={index} number={number} />
              ))}
          </div>

          <button
              onClick={generateNumbers}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition"
          >
              Gerar Números
          </button>
      </main>
  );
}
