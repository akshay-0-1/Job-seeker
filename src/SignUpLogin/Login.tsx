import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-24 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold text-mine-shaft-200">
        Login
      </div>
      <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Enter Your Email"
      />
      <PasswordInput
        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
        withAsterisk
        label="Password"
        placeholder="Password"
      />

      <Button autoContrast variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Don't have an Account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
