import { getUserFromUserId, getUserNameFromUserId } from './userUtils';

// Gets last message and userList for each conversation.
export const getSidepanelConversationList = (conversationState, userState) => {
  return conversationState.map((conversation) => {
    return {
      message: formLastMessage(getLastMessage(conversation), userState),
      users: getUsersObjectsForAConversation(conversation.users, userState),
    };
  });
};

function getUsersObjectsForAConversation(userIds, userState) {
  return userIds.map((id) => getUserFromUserId(id, userState));
}

const getLastMessage = (conversation) => {
  return conversation.messages[conversation.messages.length - 1];
};

const formLastMessage = (messageObject, userState) => {
  switch (messageObject.messageType) {
    case 'text':
      return `${getUserNameFromUserId(messageObject.sender, userState)} : ${messageObject.message}`;
    case 'join':
      return `${getUserNameFromUserId(messageObject.sender, userState)} joined! `;
    case 'leave':
      return `${getUserNameFromUserId(messageObject.sender, userState)} left! `;
    case 'img':
      return `${getUserNameFromUserId(messageObject.sender, userState)} sent an image! `;
    default:
      return 'No conversation yet !';
  }
};
