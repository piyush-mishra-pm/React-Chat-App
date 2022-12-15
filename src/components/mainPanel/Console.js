import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ACTION_TYPES from '../../store/ACTION_TYPES';
import NOTIFICATION_TYPES from '../../store/NOTIFICATION_TYPES';
import COLORS from '../../utils/COLORS';

function Console() {
  const currentState = useSelector((state) => state.current);
  const inputElement = useRef();
  const dispatch = useDispatch();

  const dispatchTextMessage = useCallback(
    (message) => {
      if (message.length === 0) return;
      dispatch({
        type: ACTION_TYPES.MESSAGE_TEXT,
        payload: {
          currentConversationId: currentState.currentConversationId,
          messageObject: {
            message,
            messageType: NOTIFICATION_TYPES.MESSAGE,
            sender: currentState.currentUserId,
            timestamp: Date.now(),
          },
        },
      });
    },
    [dispatch, currentState]
  );

  function submitOnEnterKey(e) {
    e.preventDefault();
    // Dispatch message on Enter key press:
    if (e.key === 'Enter' || e.keyCode === '13') {
      // dispatch event with payload.
      dispatchTextMessage(inputElement.current.value);
      // clear the console after message posted.
      inputElement.current.value = '';
    }
  }

  return (
    <div
      className="ui container "
      style={{
        backgroundColor: COLORS.PRIMARY_DARK,
        width: '100%',
      }}
    >
      <div
        className="ui icon large input fluid"
        style={{
          padding: '1rem',
        }}
      >
        <input ref={inputElement} type="text" placeholder="Type your message here..." onKeyUp={submitOnEnterKey} />
        <Link to="/image" className="ui yellow button" style={{ width: '5rem', marginLeft: '.5rem' }}>
          <i className="inverted circular image link icon"></i>
        </Link>
        <button
          className="ui yellow button"
          style={{ width: '5rem', marginLeft: '.25rem' }}
          onClick={() => {
            dispatchTextMessage(inputElement.current.value);
            inputElement.current.value = '';
          }}
        >
          <i className="inverted circular envelope link icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Console;
