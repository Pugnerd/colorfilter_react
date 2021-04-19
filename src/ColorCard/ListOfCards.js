import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import colors from "../data/colors.json";

function CardList({search}) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(colors.filter(
      (color) =>
        color.name.toLowerCase().includes(search.toLowerCase()) ||
        color.hex.toLowerCase().includes(search.toLowerCase())
      ))},[search]);
  // componentDidUpdate(prevProps, prevState) {
  // if (prevProps.search !== this.props.search) {
  //   const results = colors.filter(
  //     (color) =>
  //       color.name.includes(this.props.search) ||
  //       color.hex.includes(this.props.search)
  //   );
  //   this.setState({ results });
  // }
  // }

  return (
    <div className="container">
      {results.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </div>
  );
}

export default CardList;
