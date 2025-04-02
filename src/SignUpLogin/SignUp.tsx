import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-24 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold text-mine-shaft-200">
        Create Account
      </div>
      <TextInput withAsterisk label="Full Name" placeholder="Enter Your Name" />
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
      <PasswordInput
        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
        withAsterisk
        label="Comfirm Password"
        placeholder="Comfirm Password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & Conditions!</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Have an Account?{" "}
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
