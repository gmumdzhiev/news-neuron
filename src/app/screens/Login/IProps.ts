export interface IProps {
  setLoggedIn?: (loggedIn: boolean) => void;
  setDrawerOpen?: (open: boolean) => void;
  setSnackbarOpen?: (open: boolean) => void;
  setSnackbarMessage?: (message: string) => void;
  setSnackbarSeverity?: (severity: string) => void;
}
