import React, { createContext, useState } from "react";
import { mycontext } from "./mycontext";
export const TodoListContext = React.createContext();

const Provider = ({ children }) => {
  const actions = {
    NEWMSGCLICK: "NEWMSGCLICK",
    ADD_USER: "ADD_USER",
    ADD_SUBJECT: "ADD_SUBJECT",
    ADD_MESSAGE: "ADD_MESSAGE",
    ADD_SELECTORID: "ADD_SELECTORID",
    ADD_ALL: "ADD_ALL",
    ADD_ALLMESSAGE: "ADD_ALLMESSAGE",
    ADD_EXCONVERSATION: "ADD_EXCONVERSATION",
    CLEAR: "CLEAR",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actions.NEWMSGCLICK:
        const msgpayload = action.newmsgClick;

        return { ...state, msgClick: msgpayload };
      case actions.ADD_USER:
        const userpayload = action.userLabel;

        return { ...state, user: userpayload };
      case actions.ADD_SUBJECT:
        const subjectpayload = action.subjectLabel;
        return { ...state, subject: subjectpayload };
      case actions.ADD_MESSAGE:
        const messagepayload = action.messageLabel;
        return { ...state, message: messagepayload };
      case actions.ADD_SELECTORID:
        const selectorpayload = action.selectorIdLabel;
        return { ...state, selectedPersonId: selectorpayload };
      case actions.ADD_ALLMESSAGE:
        const convepayload = action.convemessage;
        console.log("Iam add all message", state.chatlist);
        return {
          ...state,
          chatlist: [
            {
              user: state.user,
              subject: state.subject,
              selectedPersonId: state.selectedPersonId,
              conversations: convepayload,
            },
            ...state.chatlist,
          ],
        };
      case actions.ADD_EXCONVERSATION:
        const exconvepayload = action.exconvemessage;
        const tempchatlist = state.chatlist;
        tempchatlist[exconvepayload.selectedPersonId] = exconvepayload;
        return {
          ...state,
          chatlist: tempchatlist,
        };
      case actions.CLEAR:
        const clearpayload = action.clearLabel;
        return { ...state, clearclicked: clearpayload };

      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, mycontext);
  console.log("state chatlist", state);
  const value = {
    ...state,
    newMessageClick: (newmsgClick) => {
      console.log("newMessageClick value provider", newmsgClick);
      dispatch({ type: actions.NEWMSGCLICK, newmsgClick });
    },
    addUser: (userLabel) => {
      dispatch({ type: actions.ADD_USER, userLabel });
    },
    addSubject: (subjectLabel) => {
      dispatch({ type: actions.ADD_SUBJECT, subjectLabel });
    },
    addMessage: (messageLabel) => {
      dispatch({ type: actions.ADD_MESSAGE, messageLabel });
    },
    addAllMessage: (convemessage) => {
      dispatch({ type: actions.ADD_ALLMESSAGE, convemessage });
    },
    addExmsg: (exconvemessage) => {
      dispatch({ type: actions.ADD_EXCONVERSATION, exconvemessage });
    },
    addSelectorId: (selectorIdLabel) => {
      dispatch({ type: actions.ADD_SELECTORID, selectorIdLabel });
    },
    clearMessage: (clearLabel) => {
      dispatch({ type: actions.CLEAR, clearLabel });
    },
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};

export default Provider;
