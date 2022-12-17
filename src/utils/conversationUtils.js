import { getUserFromUserId, getUserNameFromUserId } from './userUtils';
import Fuse from 'fuse.js';
import _ from 'lodash';
import NOTIFICATION_TYPES from '../store/NOTIFICATION_TYPES';

// Gets last message and userList for each conversation.
export function getSidepanelConversationList(conversationState, userState) {
  return conversationState.map((conversation) => {
    return {
      message: getSidePanelMessageContentAsPerMessageType(getLastMessage(conversation), userState),
      users: getUsersObjectsForAConversation(conversation.users, userState),
      index: conversation.conversationId,
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

  const DAY_IN_MS = 60 * 60 * 24 * 1000;
  if (tsDiff / DAY_IN_MS > 1) {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp));
  }

  const HR_IN_MS = DAY_IN_MS / 24;
  const hoursAgo = (tsDiff % DAY_IN_MS) / HR_IN_MS;
  const MIN_IN_MS = HR_IN_MS / 60;
  const minutesAgo = ((tsDiff % DAY_IN_MS) % HR_IN_MS) / MIN_IN_MS;
  const secondsAgo = Math.floor(minutesAgo * 60);
  if (hoursAgo > 1) {
    return `${Math.floor(hoursAgo)}hr, ${Math.floor(minutesAgo)} min ago`;
  } else if (minutesAgo > 1) {
    return `${Math.floor(minutesAgo)} min ago`;
  } else if (secondsAgo > 5) {
    return `${secondsAgo} sec ago`;
  } else return 'now'; // sec==0 min
};

function getUsersObjectsForAConversation(userIds, userState) {
  return userIds.map((id) => getUserFromUserId(id, userState));
}

const getLastMessage = (conversation) => {
  return conversation.messages[conversation.messages.length - 1];
};

export const getSidePanelMessageContentAsPerMessageType = (messageObject, userState) => {
  if (!messageObject) return '';
  switch (messageObject.messageType) {
    case NOTIFICATION_TYPES.MESSAGE:
      return `${getUserNameFromUserId(messageObject.sender, userState)} : ${messageObject.message}`;

    case NOTIFICATION_TYPES.MEMBER_JOIN:
      if (messageObject.modifiedUser === messageObject.modifyingUser)
        return `${getUserNameFromUserId(messageObject.modifiedUser, userState)} joined conversation! `;
      else
        return `${getUserNameFromUserId(messageObject.modifiedUser, userState)} added by ${getUserNameFromUserId(
          messageObject.modifyingUser,
          userState
        )}!`;

    case NOTIFICATION_TYPES.MEMBER_LEAVE:
      if (messageObject.modifiedUser === messageObject.modifyingUser)
        return `${getUserNameFromUserId(messageObject.modifiedUser, userState)} left conversation! `;
      else
        return `${getUserNameFromUserId(messageObject.modifiedUser, userState)} removed by ${getUserNameFromUserId(
          messageObject.modifyingUser,
          userState
        )}!`;

    case NOTIFICATION_TYPES.IMAGE:
      return `${getUserNameFromUserId(messageObject.sender, userState)} sent an image! `;

    case NOTIFICATION_TYPES.CONVERSATION_CREATED:
      return `${messageObject.conversationName} created by ${getUserNameFromUserId(messageObject.creator, userState)}`;

    default:
      return 'No conversation yet !';
  }
};

export function getUsersInAndOutOfCurrentConversation(users, currentConversationId, conversations) {
  const currentConversation = conversations.find((conv) => conv.conversationId === currentConversationId);
  const usersInCurrentConversation = currentConversation.users;

  const conversationUsersSet = new Set();
  usersInCurrentConversation.forEach((uId) => conversationUsersSet.add(uId));

  const usersObjectsOutOfCurrentConversation = [];
  const usersObjectsInCurrentConversation = [];
  users.forEach((user) => {
    if (!conversationUsersSet.has(user.userId)) usersObjectsOutOfCurrentConversation.push(user);
    else usersObjectsInCurrentConversation.push(user);
  });

  return [usersObjectsInCurrentConversation, usersObjectsOutOfCurrentConversation];
}

export function getExistingConversationsContainingTheSameUsers(userIds, conversations) {
  const uniqUserIds = _.sortBy(_.uniq(userIds));
  const matchingConversations = [];
  conversations.forEach((conversation) => {
    const uniqUserIdsInThisConversation = _.sortBy(_.uniq(conversation.users));
    const didUsersMatch = _.isEqual(uniqUserIdsInThisConversation, uniqUserIds);
    if (didUsersMatch) matchingConversations.push(conversation);
  });
  return matchingConversations;
}

export function getConversationUsingConversationId(conversations, conversationId) {
  return conversations.find((conversation) => conversation.conversationId === conversationId);
}