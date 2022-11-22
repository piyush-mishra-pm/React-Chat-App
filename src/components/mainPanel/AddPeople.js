import React from 'react';
import { Link } from 'react-router-dom';

function AddPeople() {
  return (
    <div
      className="one wide row"
      style={{ backgroundColor: 'grey', right: 0, left: 0, zIndex: 10, position: 'absolute', height: '5vh', top: 0 }}
    >
      <Link className="ui labeled icon button" to="/addUsersToExistingConversation">
        <i className="user plus icon"></i>
        Add user
      </Link>
    </div>
  );
}

export default AddPeople;
