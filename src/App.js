import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {Menu} from "./components/Menu";
import { Footer } from "./components/Footer";
import { TicketsAgregar } from "./components/Tickets/TicketsAgregar";
function App() {
  return (
    <>
        <BrowserRouter>
          <Menu />
          <TicketsAgregar />
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;
