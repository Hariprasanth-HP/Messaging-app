import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { TodoListContext } from "../../store/provider";
const MessageInput = () => {
  const {
    chatlist,
    addMessage,
    addSubject,
    addUser,
    message,
    subject,
    user,
    addAllMessage,
    clearMessage,
    newMessageClick,
    addSelectorId,
    msgClick,
    selectedPersonId,
    addExmsg,
  } = useContext(TodoListContext);

  var today = new Date();
  let time = 0;

  const getTime = () => {
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  };

  const currentconversations = chatlist[selectedPersonId]
    ? chatlist[selectedPersonId].conversations
    : [];
  return (
    <Message>
      <Mesinput
        type="text"
        value={message}
        placeholder="enter the message"
        onChange={(e) => {
          addMessage(e.target.value);
        }}
      />
      <Mesbutton
        type="submit"
        disabled={!(message.trim() && user && subject && message)}
        onClick={() => {
          if (msgClick) {
            console.log("iam if new msg click", msgClick);

            addMessage("");
            getTime();
            addAllMessage([{ message: message, time: time }]);
            clearMessage(true);
            newMessageClick(false);
            addSelectorId(0);
          } else {
            console.log("iam else msg click", msgClick);
            clearMessage(true);
            addMessage("");

            getTime();
            console.log("selectedPersonId else", selectedPersonId);
            addExmsg({
              user: user,
              subject: subject,
              selectedPersonId: selectedPersonId,
              conversations: [
                { message: message, time: time },
                ...currentconversations,
              ],
            });
            addSelectorId(selectedPersonId);
          }
        }}
      ></Mesbutton>
    </Message>
  );
};
const Message = styled.div`
  display: flex;
  background: whitesmoke;
  height: 8.5%;
  border: 0.1px solid black;
`;
const Mesinput = styled.input`
  height: 100%;
  width: 95%;
  font-size: medium;
`;
const Mesbutton = styled.button`
  background: green;
  margin-top: 14px;
  height: 50%;
  width: 5%;
  &:disabled {
    background-color: black;
  }
`;
export default MessageInput;
