import "./App.css";
import React from "react";
import RoutesHolder from "./routes";
import { Navbar } from "./UI_components/Navbar";
import "./App.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <RoutesHolder />
    </div>
  );
}
