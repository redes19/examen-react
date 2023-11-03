import "./App.css";
import NavBar from "./component/navBar";
import { Route, Routes } from "react-router-dom";
import List from "./component/ListPokemon";
import MyPokemon from "./component/MyPokemon";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* link of nav bar */}
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/MyPokemon" element={<MyPokemon />}></Route>
      </Routes>
    </div>
  );
}

export default App;
