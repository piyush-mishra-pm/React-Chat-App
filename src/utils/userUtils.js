// function getUserListForConversationId(conversationId) {}

// function addUserToConversation(userId, conversationId) {}

// function removeUserFromConversation(userId, conversationId) {}

function getUserFromUserId(userId, usersState) {
  // returns the first user match as per userId:
  return usersState ? usersState.find((user) => user.userId === userId) : undefined;
}

function getUserNameFromUserId(userId, userState) {
  const foundUser = getUserFromUserId(userId, userState);
  return foundUser ? foundUser.userName : undefined;
}

export { getUserNameFromUserId, getUserFromUserId };
