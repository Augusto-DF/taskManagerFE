import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button } from "./styles";
import { authUserAction } from "../../modules/Auth/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
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
    dispatch(
      authUserAction(loginPayload["email/username"], loginPayload.password)
    );
  }, [loginPayload]);

  return (
    <Form>
      <Input
        name="email/username"
        type="text"
        onChange={handleChange}
        placeholder="Email / username"
      />
      <Input name="password" onChange={handleChange} placeholder="Password" />
      <Button onClick={onLogin}>LOGIN</Button>
    </Form>
  );
};

export default Login;
