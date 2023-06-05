import { authUser } from "../../services/auth";

export const AUTH_USER = "AUTH_USER";

export const authUserAction = (username, password) => async (dispatch) =>
  dispatch({
    type: AUTH_USER,
    payload: await authUser(username, password),
  });
