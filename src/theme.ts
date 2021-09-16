import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ec6101",
      light: "#ff923d",
      dark: "#b23000"
    },
    secondary: {
      main: "#F1B596"
    }
  },
  typography: {
    fontFamily: ["sans-serif", "Roboto", '"Helvetica Neue"', "Arial"].join(",")
  }
});

theme = responsiveFontSizes(theme);

export default theme;
