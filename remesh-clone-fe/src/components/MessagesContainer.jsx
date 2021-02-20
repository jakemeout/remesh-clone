import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ConversationForm from "../forms/ConversationForm";
import Searchbar from "./Searchbar";
import { REQUEST_OPTION } from "./constants";

const MessagesContainer = ({ converstaionId }) => {
  const [messages, setMessages] = useState([]);
  const [thoughts, setThoughts] = useState({});

  useEffect(() => {
    if (converstaionId > 0) {
      fetch(
        `http://localhost:3001/messages/conversation/${converstaionId}`,
        REQUEST_OPTION
      )
        .then((response) => response.json())
        .then((data) => setMessages(data));
    }
  }, [converstaionId]);

  useEffect(() => {
    if (!messages || !messages.length) return;
    messages.forEach((msg) => {
      fetch(`http://localhost:3001/thoughts/message/${msg.id}`, REQUEST_OPTION)
        .then((response) => response.json())
        .then((data) => {
          const updatedThoughts = { ...thoughts, [msg.id]: data };
          setThoughts(updatedThoughts);
        });
    });
  }, [messages]);

  return (
    <div>
      {messages.map((msg) => {
        const thoughtsAssociated =
          (msg.id && thoughts && thoughts[msg.id]) || [];
        console.log("==>", msg.id, thoughtsAssociated);
        return (
          <div>
            <label>{msg.text}</label>
            <ul>
              {thoughtsAssociated.map((thought) => (
                <li>{thought.text}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesContainer;
