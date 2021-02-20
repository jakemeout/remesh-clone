import React, { useState } from "react";
import styled from "styled-components";
import Conversations from "./ConversationsContainer";
import Messages from "./MessagesContainer";

const AppView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
`;

const AppContainer = () => {
  const [selectedConvo, setSelectedConvo] = useState(null);

  return (
    <AppView data-testid="app-container">
      <Conversations onSelect={setSelectedConvo} />
      <Messages conversationId={selectedConvo} />
    </AppView>
  );
};

export default AppContainer;
