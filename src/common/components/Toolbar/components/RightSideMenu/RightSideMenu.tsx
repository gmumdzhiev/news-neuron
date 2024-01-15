import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import sha256 from "js-sha256";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { FormControlLabel } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";
import { StyledIcon, StyledIconContainer } from "./style";
import { SettingsMenu } from "../settings/SettingsMenu/SettingsMenu";

// @ts-expect-error: Ignoring missing module error for logo import
import icon from "../../../../../assets/nn-icon.png";

import { Copyright } from "../common/Copyright/Copyright";


interface User {
  email: string;
  hashedPassword: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const RightSideMenu = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<string>("success");

  const rememberMeToken = localStorage.getItem("rememberMeToken");

  useEffect(() => {
    if (rememberMeToken) {
      setLoggedIn(true);
    }
  }, [rememberMeToken]);

  const rememberCheckboxRef = useRef<HTMLInputElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
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

    if (authenticatedUser) {
      setLoggedIn(true);

      const rememberMeChecked = rememberCheckboxRef.current?.checked;

      if (rememberMeChecked) {
        localStorage.setItem("rememberMeToken", "your-token-here");
      }

      localStorage.setItem("currentUserEmail", email);

      handleDrawerClose();
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage(
        "Authentication failed. Please check your credentials.",
      );
      setSnackbarSeverity("error");
    }
  };

  const handleSnackBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    handleCloseUserMenu();
    localStorage.removeItem("currentUserEmail");
    navigate('/')
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={loggedIn ? handleOpenUserMenu : handleDrawerOpen}
          sx={{ p: 0 }}
        >
          <Avatar alt="User" />
        </IconButton>
      </Tooltip>

      {loggedIn ? (
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {SettingsMenu.map((setting) => (
            <Link
              key={setting.id}
              href={setting.route}
              style={{ textDecoration: "none" }}
            >
              <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" style={{ color: "#000000" }}>
                  {setting.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      ) : (
        <>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
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
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleLogin}
                  sx={{ mt: 1 }}
                >
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
          </Drawer>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackBarClose}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity={snackbarSeverity as AlertColor}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </>
      )}
    </Box>
  );
};
