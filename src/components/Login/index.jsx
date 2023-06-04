import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "./styles";

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
    <Form>
      <Input
        name="email/username"
        type="text"
        onChange={handleChange}
        placeholder="Email / username"
      />
      <Input name="Password" onChange={handleChange} placeholder="password" />
      <Button onClick={onLogin}>LOGIN</Button>
    </Form>
  );
};

export default Login;
