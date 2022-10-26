import React from "react";
import { useContext } from "react";
import { userContext } from "../../store/provider";
import ChatList from "./chat-list";
import Subject from "./subject";
import MessageContent from "./message-content";
import MessageInput from "./message-input";
import styled from "styled-components";
export default function MessageWindow() {
  const array = [
    { label: "Firstname" },
    { label: "lastname" },
    { label: "email" },
    { label: "phone number" },
  ];
  const object1 = {
    Firstname: "name 1",
    lastname: "name 2",
    email: "contact",
    "phone number": "message",
  };
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  const x = 1534236469;
  var b = x.toString().split("");
  if (b[0] === "-") {
    b.reverse().pop();
    let c = b;
    c.splice(0, 0, "-");
    console.log(c.join(""));

    // c.splice(0, 0, 1);
  } else {
    console.log(x.toString().split("").reverse().join(""));
    return x.toString().split("").reverse().join("");
  }
  return (
    <div className="">
      {/* <MessageDiv>
        <ChatDiv>
          <ChatList />
        </ChatDiv>

        <InputDiv>
          <Subject />
          <MessageContent />
          <MessageInput />
        </InputDiv>
      </MessageDiv> */}
    </div>
  );
}
const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
const ChatDiv = styled.div`
  display: flex;
  width: 20%;
  height: 99.6%;
  background: white;
  border: 0.1px solid black;
`;
const InputDiv = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 80%;
`;
