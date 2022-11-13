import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#102835";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        about="About"
        toogleMode={toogleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3 ">
      <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces " mode={mode} />
      </div>
    </>
  );
}

export default App;
