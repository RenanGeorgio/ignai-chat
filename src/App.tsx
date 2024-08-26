import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "@pages/chat";
import Faq from "@pages/faq";
import User from "@pages/user";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      {/*<Sidebar expanded={expanded} setExpanded={setExpanded} />*/}
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;