import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import PokemonSearch from "./components/PokemonSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<PokemonSearch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
