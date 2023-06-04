import React, { useCallback, useState } from "react";

const Login = () => {
  const [loginPayload, setLoginPayload] = useState({
    ["email/username"]: "",
    password: "",
  });

  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setLoginPayload((prevState) => ({ ...prevState, [name]: value })),
    []
  );

  const onLogin = useCallback(() => {
    console.log("loginPayload", loginPayload);
  }, [loginPayload]);

  return (
    <div>
      <input
        name="email/username"
        onChange={handleChange}
        placeholder="email / username"
      />
      <input name="password" onChange={handleChange} placeholder="password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
