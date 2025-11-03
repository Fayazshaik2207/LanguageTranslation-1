import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <Header onLanguageChange={setLanguage} />
      <div className="main-content">
        <Home language={language} />
        <About language={language} />
      </div>
    </div>
  );
}
