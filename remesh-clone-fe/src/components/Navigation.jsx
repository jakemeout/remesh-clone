import React from "react";
import logo from "../assets/images/RemeshLogo.png";

const Navigation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          borderBottom: "1px solid",
          paddingBottom: "5px",
        }}
      >
        <img src={logo} alt="Logo" />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </>
  );
};

export default Navigation;
