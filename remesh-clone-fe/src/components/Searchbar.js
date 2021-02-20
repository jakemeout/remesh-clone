import React, { useState } from "react";

const Searchbar = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    height: "23px",
  };

  //In lieu of the type="submit" typically on a form, using this keypress for mimicing the return functionality to smoothen the experience
  // const handleKeypress = (e) => {
  //       if(e.key === "Enter"){

  //       }
  // }

  return (
    <>
      <div style={{ marginTop: "5%", textAlign: "center" }}>
        <input
          style={BarStyling}
          // onKeyPress={handleKeypress}
          key="random1"
          value={query}
          placeholder={"Search conversations by title"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button style={{ height: "40px", padding: "8px", marginBottom: "4px" }}>
          Search!
        </button>
      </div>
    </>
  );
};

export default Searchbar;
