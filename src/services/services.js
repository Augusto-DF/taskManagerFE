const URL = "./data";
const HEADERS = {
  headers: {
    Accept: "application/json",
  },
};

const get = async (path = []) => {
  const requestPath = `${URL}/${path.join("/")}${path.length ? ".json" : ""}`;

  const response = await fetch(requestPath, HEADERS);
  const result = await response.json();

  if (result && path.length) return { status: 200, ...result };
  else return { status: 500, message: "Something's wrong happened" };
};

export { get };
