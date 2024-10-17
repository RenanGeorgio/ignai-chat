import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { CommunicationProviders, UserProvider } from "./contexts";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Configuration from "./pages/Configuration";
import Historico from "./pages/Historico";
import SideBar from "./components/side-bar";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      <UserProvider>
        <Provider store={store}>
          <CommunicationProviders>
            <div className="navbar">
              <Navbar />
            </div>
            <div className="main-content">
              <div className="sidebar">
                <SideBar />
              </div>
              <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/user" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/historico" element={<Historico />} />
              </Routes>
            </div>
            <Footer />
          </CommunicationProviders>
        </Provider>
      </UserProvider>
    </div>
  );
}

export default App;