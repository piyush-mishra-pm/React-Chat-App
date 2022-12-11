import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './components/Header';
import MainPanel from './components/mainPanel/MainPanel';
import SidePanel from './components/sidePanel/SidePanel';
import SendImage from './components/mainPanel/SendImage';
import AddUserToExistingConversation from './components/mainPanel/AddUserToExistingConversation';
import CreateConversation from './components/sidePanel/CreateConversation';
import history from './history';
import BotComponent from './BOT/BotComponent';
import './App.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <div style={{ height: '5vh' }}>
            <Header />
          </div>
          <div className="ui two column celled grid" style={{ height: '93vh' }}>
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
