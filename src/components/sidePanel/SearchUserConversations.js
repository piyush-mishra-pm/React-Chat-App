import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ACTION_TYPES from '../../store/ACTION_TYPES';

function SearchUserConversations() {
  const currentQueryString = useSelector((state) => state.current.searchUserConversationQuery);
  const dispatch = useDispatch();
  const dispatchQuery = useCallback(
    (query) => dispatch({ type: ACTION_TYPES.SEARCH_USER_IN_CONVERSATIONS, payload: query }),
    [dispatch]
  );

  return (
    <div className="ui icon input fluid">
      <input
        type="text"
        placeholder="Search users in Chats"
        value={currentQueryString}
        onChange={(e) => dispatchQuery(e.target.value)}
      />
      {currentQueryString ? (
        <button className="button negative" onClick={() => dispatchQuery('')}>
          <i className="pause icon"></i>
        </button>
      ) : (
        <i className="search icon"></i>
      )}
    </div>
  );
}

export default SearchUserConversations;
