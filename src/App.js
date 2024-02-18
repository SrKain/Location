import { useState } from "react";

export default function App() {
  const [location, setLocation] = useState({ cep: "" });


  function Locationer(evento) {
    setLocation({ cep: evento.target.value });
  }

  if (location.cep && location.cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${location.cep}/json/`)
      .then((back) => back.json())
      .then((data) => setLocation(data));
  }

  return (
    <main className="bg-gray-950 w-screen h-screen text-lg text-white flex justify-center items-center">
      <div className="flex flex-col gap-1">
        <h1>Consulte seu CEP</h1>
        <div className="">
          <input
            className="bg-gray-800 rounded-md border-2 text-white px-2"
            onChange={(evento) => Locationer(evento)}
            placeholder="Digite seu CEP"
            type="text"
          />
        </div>
        <ul>
          <li>CEP: {location.cep}</li>
          <li>Endereço: {location.logradouro}</li>
          <li>Complemento: {location.complemento}</li>
          <li>Bairro: {location.bairro}</li>
          <li>Cidade: {location.localidade}</li>
          <li>UF: {location.uf}</li>
        </ul>
      </div>
    </main>
  );
}
