import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ACTION_TYPES from '../../store/ACTION_TYPES';

function Console() {
  const currentState = useSelector((state) => state.current);
  const inputElement = useRef();
  const dispatch = useDispatch();

  const dispatchTextMessage = useCallback(
    (message) =>
      dispatch({
        type: ACTION_TYPES.MESSAGE_TEXT,
        payload: {
          currentConversationId: currentState.currentConversationId,
          messageObject: { message, messageType: 'text', sender: currentState.currentUserId, timestamp: Date.now() },
        },
      }),
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
      className="ui container"
      style={{ backgroundColor: 'blue', right: 0, left: 0, position: 'absolute', height: '7.5vh', bottom: 0 }}
    >
      <div
        className="ui icon large input"
        style={{ position: 'absolute', bottom: '1rem', top: '1rem', right: 0, left: 0 }}
      >
        <input ref={inputElement} type="text" placeholder="Type your message here..." onKeyUp={submitOnEnterKey} />
        <i
          className="inverted circular envelope link icon"
          onClick={() => dispatchTextMessage(inputElement.current.value)}
        ></i>
      </div>
    </div>
  );
}

export default Console;
