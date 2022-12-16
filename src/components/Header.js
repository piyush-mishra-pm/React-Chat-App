import React from 'react';
import { Link } from 'react-router-dom';
import COLORS from '../utils/COLORS';

function Header() {
  return (
    <div
      style={{
        backgroundColor: COLORS.SECONDARY_DARK,
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <h1>React-Redux-Chat</h1>
      </div>
      {/* Create Conversation: */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Link className="ui large labeled yellow icon button" to="/createConversation">
          <i className="user plus icon"></i>
          Create Conversation
        </Link>
      </div>
    </div>
  );
}

export default Header;
