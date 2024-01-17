import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";
import { Login } from "../../../../../app/screens/Login/Login";
import { SettingsMenu } from "../settings/SettingsMenu/SettingsMenu";
import { IProps } from "./IProps";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const RightSideMenu = ({ loggedIn, setLoggedIn }: IProps) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<string>("success");

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
    navigate("/login");
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
            <Login
              setLoggedIn={setLoggedIn}
              setDrawerOpen={setDrawerOpen}
              setSnackbarOpen={setSnackbarOpen}
              setSnackbarMessage={setSnackbarMessage}
              setSnackbarSeverity={setSnackbarSeverity}
            />
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
