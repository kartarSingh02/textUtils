// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import Error from './components/Error';

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#03010c';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils - Dark Mode' - this is used for changing the title of the website
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Main>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode}/>} /> 
        <Route path="/*" element={<Error />} /> 
      </Routes>
      </div>
      </Main>
    </>
  )
}

export default App;