import React from "react";
import styled from "styled-components";
import ConversationForm from "../forms/ConversationForm";
import Searchbar from "./Searchbar";

const Conversations = () => {

    const renderConversations = () => {

    }

  return (
    <>
      <ConversationsContainer>
        <div>
          <Searchbar />
        </div>
        <ViewConversationsContainer>
          <div>
            <h3>View Conversations</h3>
            {renderConversations}
          </div>
        </ViewConversationsContainer>
        <ConversationForm />
      </ConversationsContainer>
    </>
  );
};

const ConversationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ViewConversationsContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

export default Conversations;
