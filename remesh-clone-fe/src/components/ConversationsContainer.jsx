import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Form from "./Form";
import { GET_REQUEST_OPTION } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = ({ value, onUpdate }) => {
  return (
    <div>
      Search Conversation:
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      />
    </div>
  );
};

const ConversationsContainer = ({ onSelect }) => {
  const [conversations, setConversations] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/conversations", GET_REQUEST_OPTION)
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .then(() => onSelect(conversations));
  }, []);

  const visibleConversations = useMemo(() => {
    if (!filter.length) return conversations;
    return conversations.filter((c) =>
      (c.title || "").toLowerCase().includes((filter || "").toLowerCase())
    );
  }, [filter, conversations]);

  return (
    <Container data-testid="conversations-container">
      <SearchBar value={filter} onUpdate={setFilter} />
      <ul>
        {(visibleConversations || []).map((c) => (
          <li key={c.id} onClick={() => onSelect(c.id)}>
            {c.title} | {c.start_date}
          </li>
        ))}
      </ul>
      <Form label={"Start a new conversation"} endpoint={"conversations"} />
    </Container>
  );
};

export default ConversationsContainer;
