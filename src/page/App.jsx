import TableDeJeu from "../composant/TableDeJeu";
import TableScore from "../composant/TableScore";

import { useState } from "react";

// alert("Bienvenue dans le Jeu Morpion 🎮");

function App() {

  const [pion, setPion] = useState("O");
  const [pionWinner, setPionWinner] = useState(
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );

  return (
    <div>
      <div className="container-fluid p-5 d-flex flex-lg-row flex-column">
        <div className="col-12 col-lg-4 m-2">
          <TableScore pionWinner={pionWinner} setPionWinner={setPionWinner} />
        </div>
        <div className="col-12 col-lg-8 m-2">
          <TableDeJeu pion={pion} setPion={setPion} pionWinner={pionWinner} setPionWinner={setPionWinner} />
        </div>
      </div>
      <div className="col-12 p-5 pt-0  d-flex justify-content-between">
        <button className="btn btn-outline-danger"> Reprendre </button>
        <button className="btn btn-success" onClick={() => setPionWinner("X")}> Résultat </button>
      </div>
    </div>

  );
}

export default App;
