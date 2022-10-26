import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../store/provider";
const Subject = () => {
  const [messageclick, setMessageclick] = useState();
  const {
    addSubject,
    subject,
    clearclicked,
    chatlist,
    msgClick,
    selectedPersonId,
  } = React.useContext(TodoListContext);
  console.log("sunject chatlist", chatlist);
  return (
    <Subjectbox>
      {!msgClick ? (
        <Subjectdisplay>{subject}</Subjectdisplay>
      ) : (
        <TextInput
          type="text"
          placeholder={"enter the subject"}
          onChange={(e) => {
            addSubject(e.target.value);
          }}
        />
      )}
    </Subjectbox>
  );
};
const Subjectbox = styled.div`
  display: flex;
  height: 9%;
  background: ghostwhite;
`;
const TextInput = styled.input`
height: 50%;
font-size: medium;
width: 74%;
margin: 10px;
}
`;
const Subjectbutton = styled.button`
  border: 0.1px solid black;
  height: 43%;

  display: flex;
  margin: 18px 0 0 8px;
  width: 12%;
  border-radius: 13px;
`;

export default Subject;
const Subjectdisplay = styled.div`
  border: 1px solid black;
  background: yellow;
`;
