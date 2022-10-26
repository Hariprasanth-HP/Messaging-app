import "./App.css";
import MessageApp from "./component/message-app/message-app";
import Provider from "./store/provider";
function App() {
  return (
    <Provider>
      <MessageApp />
    </Provider>
  );
}

export default App;
