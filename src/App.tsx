import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/side-bar";
// import { SidebarProvider } from "./contexts/SidebarContext";
import Chat from "./pages/chat/chatPage";
import Faq from "./pages/faq/faqPage";
import User from "./pages/user/userPage";

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