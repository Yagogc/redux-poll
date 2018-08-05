export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
  return {
    RECEIVE_USERS,
    users
  };
};
