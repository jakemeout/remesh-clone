import React, { useEffect } from "react";
import styled from "styled-components";
import Conversations from "./Conversations";

const AppContainer = () => {
  useEffect(() => {
    fetch('fetch("http://localhost:3001/conversations", requestOptions)');
  }, []);

  return (
    <AppContainerStyle>
      <h1>Conversations</h1>
      <Conversations />
    </AppContainerStyle>
  );
};

const AppContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  height: 50;
  width: 50;
`;

export default AppContainer;
