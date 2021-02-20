import React, { useEffect, useState } from "react";
import { GET_REQUEST_OPTION } from "../constants";
import Form from "./Form";

const MessagesContainer = ({ conversationId }) => {
  const [messages, setMessages] = useState([]);
  const currTime = new Date().toISOString();
  useEffect(() => {
    if (conversationId > 0) {
      fetch(
        `http://localhost:3001/messages/conversation/${conversationId}`,
        GET_REQUEST_OPTION
      )
        .then((response) => response.json())
        .then((messageData) => {
          let newMessages = [...messageData];
          console.log("###", messageData);
          if (!messageData.length) {
            setMessages(newMessages);
          } else {
            (messageData || []).forEach((msg, i) => {
              fetch(
                `http://localhost:3001/thoughts/message/${msg.id}`,
                GET_REQUEST_OPTION
              )
                .then((response) => response.json())
                .then((data) => {
                  newMessages[i] = { ...msg, thoughts: data };
                  setMessages(newMessages);
                });
            });
          }
        });
    }
  }, [conversationId]);

  return (
    <div data-testid="messages-container">
      {messages.map((msg) => {
        return (
          <div>
            <label>{msg.text}</label>
            <ul>
              {(msg.thoughts || []).map((thought) => (
                <li key={thought.id}>{thought.text}</li>
              ))}
              <li>
                <Form
                  label={"New thought"}
                  endpoint={"thoughts"}
                  options={{ message_id: msg.id, date_sent: currTime }}
                />
              </li>
            </ul>
          </div>
        );
      })}
      <Form
        label={"New message"}
        endpoint={"messages"}
        options={{ conversation_id: conversationId, date_sent: currTime }}
      />
    </div>
  );
};

export default MessagesContainer;
