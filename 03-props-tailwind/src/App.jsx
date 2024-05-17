import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  function handleButton(color) {
    setColor(color);
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className=" text-xl flex flex-wrap justify-center font-bold underline py-5">
        BG Changer App with Vite
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-white"
            onClick={() => handleButton("white")}
          >
            Light
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600"
            onClick={() => handleButton("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-300"
            onClick={() => handleButton("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-600 "
            onClick={() => handleButton("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-slate-700"
            onClick={() => handleButton("#414141")}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
