import "./App.css";
import NavBar from "./component/navBar";
import { Route, Routes } from "react-router-dom";
import List from "./component/ListPokemon";
import MyPokemon from "./component/MyPokemon";

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/MyPokemon" element={<MyPokemon />}></Route>
      </Routes>
    </div>
  );
}

export default App;
