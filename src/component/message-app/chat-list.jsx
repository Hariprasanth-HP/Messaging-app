import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../store/provider";
import NewUser from "./new-user";
const ChatList = () => {
  const { chatlist, addSelectorId, selectedPersonId, addSubject, msgClick } =
    React.useContext(TodoListContext);
  const [draft, setDraft] = useState("");
  return (
    <ChatBox>
      <NewUser />

      <ChatBoxinside>
        {chatlist.length !== 0 &&
          chatlist.map((val, index) => {
            console.log("chatlist map at chatlist component", val);
            console.log("hi iam chatlist msg click", msgClick);
            return (
              <Namesub key={index}>
                <Listitem
                  key={index}
                  onClick={() => {
                    addSubject(chatlist[index].subject);
                    addSelectorId(index);
                    console.log("current index", index);
                  }}
                  style={{
                    background: index === selectedPersonId ? "green" : "white",
                  }}
                >
                  <Roundbutton key={index}>{val.user}</Roundbutton>
                  <SubName>{val.subject}</SubName>
                </Listitem>
              </Namesub>
            );
          })}
      </ChatBoxinside>
    </ChatBox>
  );
};
const ChatBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ChatBoxinside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Listitem = styled.div`
  &:hover {
    background: whitesmoke;
  }
  display: flex;
  flex-direction: row;
  background: green;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border: 0.1px solid black;
`;
const Namesub = styled.div`
  display: flex;
  flex-direction: column-reverse !important;
`;
const Roundbutton = styled.button`
  width: 20%;
  height: 80%;
  margin-top: 6px;
  border-radius: 30px;
`;
const SubName = styled.h5`
  width: 50%;
  height: 50%;
  margin-top: 8px;
  font-size: medium;
  margin-left: 14px;
`;

export default ChatList;
{
  /* <div>
              <Listitem key={index}>
                <Roundbutton key={index}>
                  {val.user.split("").splice(0, 2).join("").toUpperCase()}
                </Roundbutton>
                <SubName>{val.subject}</SubName>
              </Listitem>
            </div> */
}
