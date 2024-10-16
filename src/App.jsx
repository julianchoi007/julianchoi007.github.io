import "./App.css";
import Main from "./pages/Page";
import { useRef, useState } from "react";
import RefContext from "./context/RefContext";
import KeyContext from "./context/KeyContext";
function App() {
  const appRef = useRef(null);
  const [keys, setKeys] = useState(["", "", "", "", ""]);
  const keyContext = { keys, setKeys };
  return (
    <div className="App" ref={appRef}>
      <RefContext.Provider value={appRef}>
        <KeyContext.Provider value={keyContext}>
          <Main />
        </KeyContext.Provider>
      </RefContext.Provider>
    </div>
  );
}

export default App;
