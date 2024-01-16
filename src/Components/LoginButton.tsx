import * as React from "react";
import { Button } from "@mui/material";
import { User } from "@phosphor-icons/react";

const postoloLoginUrl = process.env.NEXT_POSTOLO_LOGIN_URL;

export const LoginButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<User weight="duotone" />}
      component="a"
      href={postoloLoginUrl}
    >
      Login
    </Button>
  );
};
