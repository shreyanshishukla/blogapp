export const add = (payload) => ({ type: "add", payload });
export const deleteblogaction = (payload) => ({ type: "delete", payload });
export const liketheblogaction = (payload) => ({
  type: "liketheblog",
  payload,
});
export const edittheblog = (payload) => ({
  type: "edittheblog",
  payload,
});
