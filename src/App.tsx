import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Faq from './pages/Faq';
import User from './pages/User';
import SideBar from './components/side-bar';

import './App.css';
// import { ChatProvider } from './contexts';
import { Provider } from 'react-redux';
import { store } from 'store/store';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      <Provider store={store}>
        <div className="sidebar">
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
