import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";

export default function App() {
  return (
    <>
      {/* <Greet name = "Bruce" heroName = "Batman" />
      <Greet name = "Clark" heroName = "Superman" />
      <Greet name = "Diana" heroName = "Wonder Woman" />
      <Welcome /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      <EventBind /> 
    </>
  );
}
