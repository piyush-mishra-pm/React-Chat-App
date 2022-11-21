import { getUserFromUserId, getUserNameFromUserId } from './userUtils';
import Fuse from 'fuse.js';

// Gets last message and userList for each conversation.
export function getSidepanelConversationList(conversationState, userState) {
  return conversationState.map((conversation) => {
    return {
      message: getSidePanelMessageContentAsPerMessageType(getLastMessage(conversation), userState),
      users: getUsersObjectsForAConversation(conversation.users, userState),
    };
  });
}

export function getSidepanelConversationsContainingMatchingUser(conversationsState, usersState, userNameQuery) {
  const matchingUsers = findMatchingUsers(usersState, userNameQuery);
  // No User match found:
  if (matchingUsers.length === 0) return { found: false, message: 'No such User exists!' };

  const matchingConversations = findMatchingConversations(matchingUsers, conversationsState);
  if (matchingConversations.length === 0) return { found: false, message: 'User exists, but not in any conversation!' };

  return { found: true, matchedResult: getSidepanelConversationList(matchingConversations, usersState) };
}

function findMatchingUsers(usersState, userNameQuery) {
  if (!usersState) return null;
  const fuseInstance = new Fuse(usersState, { keys: ['userName'] });
  return fuseInstance.search(userNameQuery);
}

function findMatchingConversations(matchingUsers, conversationsState) {
  if (!matchingUsers || !conversationsState) return null;

  const matchingConversationsSet = new Set();
  matchingUsers.forEach((user) => {
    const userConversations = getConversationsContainingUserId(conversationsState, user.item.userId);
    for (const matchedConversation of userConversations) {
      matchingConversationsSet.add(matchedConversation);
    }
  });
  return Array.from(matchingConversationsSet);
}

function getConversationsContainingUserId(conversations, userId) {
  const matchingConversations = [];
  conversations.forEach((conversation) => {
    for (const id of conversation.users) {
      if (id !== userId) continue;
      matchingConversations.push(conversation);
    }
  });
  return matchingConversations;
}

// Converts epoch timestamp to dateTime string for messages.
export const tsToDateTime1d1hSensitive = (timestamp) => {
  const tsNow = Date.now();
  const tsDiff = tsNow - timestamp;

  if (tsDiff < 0) return 'Future date!';

  const DAY_IN_MS = 60 * 60 * 24 * 1000;
  if (tsDiff / DAY_IN_MS > 1) {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp));
  }

  const HR_IN_MS = DAY_IN_MS / 24;
  const hoursAgo = (tsDiff % DAY_IN_MS) / HR_IN_MS;
  const MIN_IN_MS = HR_IN_MS / 60;
  const minutesAgo = ((tsDiff % DAY_IN_MS) % HR_IN_MS) / MIN_IN_MS;

  return hoursAgo > 1 ? `${hoursAgo}hr, ${parseInt(minutesAgo)} min ago` : `${parseInt(minutesAgo)} min ago`;
};

function getUsersObjectsForAConversation(userIds, userState) {
  return userIds.map((id) => getUserFromUserId(id, userState));
}

const getLastMessage = (conversation) => {
  return conversation.messages[conversation.messages.length - 1];
};

const getSidePanelMessageContentAsPerMessageType = (messageObject, userState) => {
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
