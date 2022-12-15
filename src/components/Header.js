import React from 'react';
import { Link } from 'react-router-dom';
import COLORS from '../utils/COLORS';

function Header() {
  return (
    <div
      style={{
        backgroundColor: COLORS.PRIMARY_DARK,
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>React-Redux-Chat</h1>
      </div>
      {/* Create Conversation: */}
      <div>
        <Link className="ui labeled icon button" to="/createConversation">
          <i className="user plus icon"></i>
          Create Conversation
        </Link>
      </div>
    </div>
  );
}

export default Header;
