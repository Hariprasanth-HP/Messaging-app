import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../store/provider";
const MessageContent = () => {
  const { chatlist, selectedPersonId, msgClick } = useContext(TodoListContext);

  const chatMessage = chatlist[selectedPersonId]
    ? chatlist[selectedPersonId].conversations
    : [];
  return (
    <Meshead>
      {chatlist.length !== 0 &&
        !msgClick &&
        chatMessage.map((conve, index) => {
          console.log("chatlist[selectedPersonId].conversations", conve);
          return (
            <Messagedisplay key={index}>
              {conve.message}
              <Messagedisplay key={index}>{conve.time}</Messagedisplay>
            </Messagedisplay>
          );
        })}
    </Meshead>
  );
};
const Meshead = styled.div`
  & {
    display: flex;
    flex-direction: column-reverse;
    border: 0.1px solid black;
    background: lightgray;
    height: 80%;
    align-items: flex-end;
    overflow: auto;
  }
  &after {
    -webkit-scrollbar {
      display: none;
    }
  }
`;
const Messagedisplay = styled.p`
display: flex;
border: 1px solid black;
border-radius: 4px;
margin-right: 13px;
}
`;
const Timedisplay = styled.p`
display: flex;

border-radius: 4px;
margin-right: 4px;
}
`;

export default MessageContent;
const Newmessagebutton = styled.button`
  border: 0.1px solid black;
  height: 10%;

  display: flex;
  margin: 18px 0 0 8px;
  width: 20%;
  border-radius: 13px;
`;
const Newusercontent = styled.input`
  border: 0.1px solid black;
  height: 43%;
  display: flex;
  margin: 15px 0 0 8px;
`;
