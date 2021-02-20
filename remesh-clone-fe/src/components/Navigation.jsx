import React from "react";
import logo from "../assets/images/RemeshLogo.png";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavStyle>
      <div data-testid="navigation-container">
        <img src={logo} alt="Logo" style={{ width: "50%", height: "20%" }} />
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  display: "flex",
  justifyContent: "flex-start",
  borderBottom: "1px solid",
  paddingBottom: "5px",
`;

export default Navigation;
