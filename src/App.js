import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, { useState } from 'react'
import Textform from './components/Textform';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert('Dark mode has been Enable', 'success')
      // setInterval(() => {
      //   document.title = "textutills is amazing"
      // },2000);
      // setInterval(() => {
      //   document.title = "Install textutills "
      // },1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('light mode has been Enable', 'success')
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutills" abouttext="About Textutills" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App;
