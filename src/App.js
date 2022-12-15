import React from 'react';
import { Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import MainPanel from './components/mainPanel/MainPanel';
import SidePanel from './components/sidePanel/SidePanel';
import SendImage from './components/mainPanel/SendImage';
import AddUserToExistingConversation from './components/mainPanel/AddUserToExistingConversation';
import CreateConversation from './components/sidePanel/CreateConversation';
import history from './history';
import BotComponent from './BOT/BotComponent';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <div style={{ height: '3vh' }}>
            <ToastContainer />
            <Header />
          </div>
          <div className="ui two column celled grid" style={{ height: '97vh' }}>
            <SidePanel />
            <MainPanel />
          </div>
          <Route path="/image" exact component={SendImage} />
          <Route path="/addUsersToExistingConversation" exact component={AddUserToExistingConversation} />
          <Route path="/createConversation" exact component={CreateConversation} />
        </div>
      </Router>
      <BotComponent />
    </div>
  );
}

export default App;
