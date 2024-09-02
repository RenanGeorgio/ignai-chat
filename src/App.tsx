import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import User from "./pages/User";
import SideBar from "@components/side-bar";

import "./App.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;