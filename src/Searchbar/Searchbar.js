import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px auto;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 147, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: yellow;
`;

function Searchbar({search,setSearch}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: "",
  //   };
  // }

  useEffect(() => {
		setSearch(search);
	}, [search, setSearch]);

  // componentDidUpdate(preProps, prevState) {
  //   if (prevState.search !== this.state.search)
  //     this.props.search({ search: this.state.search });
  // }

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Input onChange={onChangeHandler} autoFocus />
    </div>
  );
}

export default Searchbar;
