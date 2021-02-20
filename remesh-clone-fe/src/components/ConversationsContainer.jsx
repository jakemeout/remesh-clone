import React from "react";
import styled from "styled-components";
import ConversationForm from "../forms/ConversationForm";
import Searchbar from "./Searchbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConversationsContainer = ({ conversations, onSelect }) => {
  return (
    <Container>
      <Searchbar />
      <ul>
        {(conversations || []).map((c) => (
          <li key={c.id} onClick={() => onSelect(c.id)}>
            {c.title}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ConversationsContainer;
