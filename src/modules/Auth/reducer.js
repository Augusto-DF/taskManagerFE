import { AUTH_USER } from "./actions";

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
  username: null,
  token: null,
  error: null,
};

const auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_USER: {
      const { user, error } = payload;
      if (user) return { ...state, ...user, error: null };
      if (error) return { ...state, error: { ...error } };
    }
  }
  return state;
};

export default auth;
