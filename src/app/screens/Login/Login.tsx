import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import sha256 from "js-sha256";

import {
  Avatar,
  Box,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import {
  StyledIcon,
  StyledIconContainer,
} from "../../../common/components/Toolbar/components/RightSideMenu/style";
import { Copyright } from "../../../common/components/Toolbar/components/common/Copyright/Copyright";

// @ts-expect-error: Ignoring missing module error for logo import
import icon from "../../../assets/nn-icon.png";
import { IProps } from "./IProps";

interface User {
  email: string;
  hashedPassword: string;
}

export const Login = ({
  //   setLoggedIn,
  setDrawerOpen,
  //   setSnackbarOpen,
  //   setSnackbarMessage,
  //   setSnackbarSeverity,
}: IProps) => {
  const rememberCheckboxRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    if (typeof setDrawerOpen !== "undefined") {
      setDrawerOpen(false);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingUsersJSON = localStorage.getItem("registeredUsers");
    const existingUsers = existingUsersJSON
      ? JSON.parse(existingUsersJSON)
      : [];

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const hashedPassword = sha256.sha256(password);

    const authenticatedUser = existingUsers.find(
      (user: User) =>
        user.email === email && user.hashedPassword === hashedPassword,
    );

    if (
      authenticatedUser
      // && typeof setLoggedIn !== "undefined"
    ) {
      const rememberMeChecked = rememberCheckboxRef.current?.checked;

      if (rememberMeChecked) {
        localStorage.setItem("rememberMeToken", "your-token-here");
      }

      localStorage.setItem("currentUserEmail", email);

      handleDrawerClose();
      navigate("/news");
    }
    // else if (
    //   typeof setSnackbarOpen !== "undefined" &&
    //   typeof setSnackbarMessage !== "undefined" &&
    //   typeof setSnackbarSeverity !== "undefined"
    // ) {
    //   setSnackbarOpen(true);
    //   setSnackbarMessage(
    //     "Authentication failed. Please check your credentials.",
    //   );
    //   setSnackbarSeverity("error");
    // }
  };

  return (
    <Grid
      item
      sx={{ boxShadow: "none" }}
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      square
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#000000" }}>
          <StyledIconContainer>
            <StyledIcon src={icon} />
          </StyledIconContainer>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                inputRef={rememberCheckboxRef}
                value="remember"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/register" variant="body2">
                No account? Sign Up
              </Link>
            </Grid>
            <Grid item>
              <Link href="/reset-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Copyright />
        </Box>
      </Box>
    </Grid>
  );
};
