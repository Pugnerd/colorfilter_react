import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

function App() {
  const [search, setSearch] = useState("");
  // const setState = () => {
  //   setSearch(search);
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: "",
  //   };
  //   this.setState = this.setState.bind(this);
  // }

  useEffect(() => {
    document.addEventListener("click", welcome);

  });

  const welcome = () => {
    alert("Hello!");
  };

  return (
    <div>
      <Searchbar search={search} setSearch={setSearch} />
      <CardList search={search} />
    </div>
  );
}

export default App;
