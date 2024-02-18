import { useState } from "react";

export default function App() {
  const [location, setLocation] = useState({});

  function Locationer(evento) {
    setLocation({cep: evento.target.value})
  }

  return (
    <main className="bg-gray-950 w-screen h-screen text-lg text-white flex justify-center items-center">
      <div className="flex flex-col gap-1">
        <h1>Consulte seu CEP</h1>
        <input
          className="bg-gray-800 rounded-md border-2 text-white px-2"
          onChange={evento=>Locationer(evento)}
          placeholder="digite seu cep"
          type="text"
        />
        <p>'CEP: ${location}'</p>
      </div>
    </main>
  );
}
