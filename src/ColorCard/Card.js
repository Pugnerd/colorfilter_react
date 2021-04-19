import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
width: 100%;
height: 150px;
border: 1px solid black;
box-shadow: 2px 2px 5px #000000;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) =>
      props.theme.backgroundColor === "#000000" ? "white" : "black"};
      `;

Div.defaultProps = {
  theme: { color: 0xffffff, backgroundColor: "#fff" },
    };

function Card({color}) {
  
    // componentDidMount() {
  //   this.Div.defaultProps = {
  //     theme: { color: 0xffffff, backgroundColor: "#fff" },
  //   };
  // }

  const theme = {
    backgroundColor: color.hex,
  };
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <h1>{color.name}</h1>
        {color.hex}
      </Div>
    </ThemeProvider>
  );
}

export default Card;
