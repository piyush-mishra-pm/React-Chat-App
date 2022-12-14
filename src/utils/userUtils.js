function getUserFromUserId(userId, usersState) {
  // returns the first user match as per userId:
  return usersState ? usersState.find((user) => user.userId === userId) : undefined;
}

function getUserNameFromUserId(userId, userState) {
  const foundUser = getUserFromUserId(userId, userState);
  return foundUser ? foundUser.userName : undefined;
}

function getUserDetailObjectsFromUserIDsArray(userIds, usersState) {
  const foundUsers = [];
  for (const userId of userIds) {
    const matchedUser = usersState.find((user) => user.userId === userId);
    foundUsers.push(matchedUser);
  }
  return foundUsers;
}

export { getUserNameFromUserId, getUserFromUserId, getUserDetailObjectsFromUserIDsArray };
