import { get } from "./services";

export const authUser = async (username, password) => {
  const path = ["users"];
  //Should be a post but theres no a BE
  const res = await get(path);

  //Simulate a BE
  if (res.status === 500) return { error: { [path]: res.message } };
  if (res.status === 200) {
    if (
      !res.users.find(
        (user) => user.email === username || user.username === username
      )
    )
      return { error: { [path]: "Incorrect Email or Username" } };
    if (!res.users.find((user) => user.password === password))
      return { error: { [path]: "Incorrect Password" } };
    else
      return {
        user: {
          ...res.users.find(
            (user) => user.email === username || user.username === username
          ),
          password: undefined,
        },
      };
  }
};
