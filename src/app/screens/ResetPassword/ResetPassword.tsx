import React, { useState, ChangeEvent, FormEvent } from "react";
import sha256 from "js-sha256";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";
import {
  StyledIcon,
  StyledIconContainer,
} from "../../../common/components/Toolbar/components/RightSideMenu/style";

// @ts-expect-error: Ignoring missing module error for logo import
import icon from "../../../assets/nn-icon.png";
// @ts-expect-error: Ignoring missing module error for logo import
import backgroundImage from "../../../assets/newspaper-background.png"; // Import the background image

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface User {
  email: string;
  hashedPassword: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<string>("success");

  const vertical = "bottom";
  const horizontal = "right";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hashPassword = (password: string) => {
    return sha256.sha256(password);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSnackbarOpen(true);

    try {
      const existingUsersJSON = localStorage.getItem("registeredUsers");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      const { email } = formData;
      const newPassword = formData.password;
      const hashedPassword = hashPassword(newPassword);

      const userIndex = existingUsers.findIndex(
        (user: User) => user.email === email,
      );

      if (userIndex === -1) {
        setSnackbarMessage("User not found. Please check your email.");
        setSnackbarSeverity("error");
      } else {
        existingUsers[userIndex].hashedPassword = hashedPassword;

        localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

        setSnackbarMessage("Password reset successful");
        setSnackbarSeverity("success");
        navigate("/");
      }
    } catch (error) {
      console.error("Error resetting password:", (error as Error).message);
      setSnackbarMessage("Error resetting password. Please try again.");
      setSnackbarSeverity("error");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            width: "100%",
            maxWidth: 300,
            margin: "0 16px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
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
              Reset password
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Reset
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
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
    </Box>
  );
};
