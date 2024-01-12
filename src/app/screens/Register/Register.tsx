import React, { useState, ChangeEvent, FormEvent } from "react";
import sha256 from "js-sha256";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
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

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hashPassword = (password: string) => {
    return sha256.sha256(password);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const hashedPassword = hashPassword(formData.password);
      const user = {
        email: formData.email,
        hashedPassword,
      };

      // Save user data in local storage
      localStorage.setItem("registeredUser", JSON.stringify(user));

      console.log("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", (error as Error).message);
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
              Register
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
              label="Password"
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
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Register
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};
