import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <>
      <Greet />
      <Welcome />
    </>
  );
}
