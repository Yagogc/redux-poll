export const RECEIVE_POLLS = "RECEIVE_POLLS";

export const receivePolls = polls => {
  return {
    RECEIVE_POLLS,
    polls
  };
};
