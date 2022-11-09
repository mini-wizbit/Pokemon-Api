import React from "react";
import pokeball from "../Imgs/8-bit-pokeball.png"

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Pokedex</h2>
      <div>
        <img src={pokeball} alt="Pokeball in 8 bit pixel art"></img>
      </div>
    </div>
  );
}
