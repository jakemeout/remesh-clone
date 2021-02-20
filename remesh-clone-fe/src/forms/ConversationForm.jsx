import React, {useState} from "react";

const ConversationForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:3001/conversations", requestOptions);
  };

  const formBody = {
    title: title,
    startDate: startDate,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formBody }),
  };

  

  return (
    <div>
      <form onsubmit={handleSubmit}>
        <label>Enter a conversation title</label>
        <input type="text" name="title" />
      </form>
    </div>
  );
};

export default ConversationForm;
