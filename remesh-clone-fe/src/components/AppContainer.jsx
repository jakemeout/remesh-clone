import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Conversations from "./ConversationsContainer";
import Messages from "./MessagesContainer";
import { REQUEST_OPTION } from "./constants";

const AppView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
`;

const AppContainer = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConvo, setSelectedConvo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/conversations", REQUEST_OPTION)
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .then(() => setSelectedConvo(conversations));
  }, []);

  return (
    <AppView>
      <Conversations
        conversations={conversations}
        onSelect={setSelectedConvo}
      />
      <Messages converstaionId={selectedConvo} />
    </AppView>
  );
};

export default AppContainer;
