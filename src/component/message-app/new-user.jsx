import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../store/provider";
import Subject from "./subject";

const NewUser = () => {
  const [showMessageBox, setshowMessageBox] = useState(false);
  const {
    addUser,
    clearclicked,
    newMessageClick,
    clearMessage,
    addSubject,
    addMessage,
  } = useContext(TodoListContext);
  return (
    <Newuserbox>
      {clearclicked ? (
        <Newmessagebutton
          onClick={() => {
            setshowMessageBox(true);
            newMessageClick(true);
            clearMessage(false);
            addSubject("");
            addMessage("");
          }}
        >
          New message
        </Newmessagebutton>
      ) : (
        <>
          {showMessageBox ? (
            <>
              <Newuserbutton
                onClick={() => {
                  setshowMessageBox(false);
                  clearMessage(true);
                  newMessageClick(false);
                  addSubject("");
                  addMessage("");
                }}
              >
                Back
              </Newuserbutton>
              <Newusercontent
                placeholder="username"
                autoFocus
                onChange={(e) => {
                  addUser(e.target.value);
                }}
              />
            </>
          ) : (
            <Newmessagebutton
              onClick={() => {
                console.log("New msg click true");
                setshowMessageBox(true);
                newMessageClick(true);
                addMessage("");
              }}
            >
              New message
            </Newmessagebutton>
          )}
        </>
      )}
    </Newuserbox>
  );
};

export default NewUser;
const Newusercontent = styled.input`
  border: 0.1px solid black;
  height: 45%;

  display: flex;
  margin: 15px 0 0 14px;
  width: 131px;
`;
const Newuserbox = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
  border: 0.1px solid black;
`;

const Newmessagebutton = styled.button`
  border: 0.1px solid black;
  height: 34%;

  display: flex;
  margin: 20px 0 0 41px;
  width: 49%;
  border-radius: 13px;
`;
const Newuserbutton = styled.button`
  border: 0.1px solid black;
  border: 0.1px solid black;
  height: 43%;

  display: flex;
  width: 17%;
  border-radius: 8px;
  margin: 18px 0px 0px 6px;
}
`;
const Subjectbox = styled.div`
  display: flex;
  height: 9%;
  background: ghostwhite;
`;
