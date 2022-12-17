import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ACTION_TYPES from '../store/ACTION_TYPES';
import NOTIFICATION_TYPES from '../store/NOTIFICATION_TYPES';
import { getConversationUsingConversationId } from '../utils/conversationUtils';
import { BOT_IMAGE_URLS, BOT_USER_IDs, BOT_MESSAGE_TEXTS } from './BOT_SAMPLE_DATA';

const BOT_ACTION = {
  MESSAGE: 0,
  IMAGE: 1,
};

function BotComponent() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const dispatchBotAction = useCallback(
    (type, payload) => {
      switch (type) {
        case ACTION_TYPES.MESSAGE_IMG:
          dispatch({
            type,
            payload: {
              currentConversationId: state.current.currentConversationId,
              userId: payload.botId,
              messageObject: {
                messageType: NOTIFICATION_TYPES.IMAGE,
                imgAltText: 'picture sent by Bot',
                imgUrl: payload.imgUrl,
                sender: payload.botId,
                timestamp: Date.now(),
              },
            },
          });
          break;
        case ACTION_TYPES.MESSAGE_TEXT:
          dispatch({
            type,
            payload: {
              currentConversationId: state.current.currentConversationId,
              userId: payload.botId,
              messageObject: {
                messageType: NOTIFICATION_TYPES.MESSAGE,
                message: payload.msg,
                sender: payload.botId,
                timestamp: Date.now(),
              },
            },
          });
          break;
        default:
          break;
      }
    },
    [dispatch, state]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChoice = getRandomInt(2);
      const randomBotId = BOT_USER_IDs[getRandomInt(BOT_USER_IDs.length)];
      const currentConversation = getConversationUsingConversationId(
        state.conversations,
        state.current.currentConversationId
      );
      if (currentConversation.users.find((userId) => userId === randomBotId)) {
        switch (randomChoice) {
          case BOT_ACTION.MESSAGE:
            const randomMessage = BOT_MESSAGE_TEXTS[getRandomInt(BOT_MESSAGE_TEXTS.length)];
            dispatchBotAction(ACTION_TYPES.MESSAGE_TEXT, { msg: randomMessage, botId: randomBotId });
            break;
          case BOT_ACTION.IMAGE:
            const randomImg = BOT_IMAGE_URLS[getRandomInt(BOT_IMAGE_URLS.length)];
            dispatchBotAction(ACTION_TYPES.MESSAGE_IMG, { imgUrl: randomImg, botId: randomBotId });
            break;

          default:
            console.error('BOT Action not defined yet');
            break;
        }
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatchBotAction, state]);

  return <React.Fragment></React.Fragment>;
}

// max is exclusive. 0 is inclusive:
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default BotComponent;
