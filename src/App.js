import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div>
      <Navbar />
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}
