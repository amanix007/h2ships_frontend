import AppRouter from "./AppRouter";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import TopMenu from "./components/header/TopMenu";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#0B4DA2",
      // dark: will be calculated from palette.primary.main, contrastText: will be
      // calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: "#0066ff",
      main: "#FF3326",
      // dark: will be calculated from palette.secondary.main, contrastText:
      // '#ffcc00',
    },
    error: {
      main: "#D32F2F",
    },
    success: {
      main: "#43A046",
    },
    dark: {
      darkerGray: "#4d5661",
    },
  },
  typography: {
    useNextVariants: true,

    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Poppins",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/*<TopMenu />*/}
          <Header />
          <ScrollToTop />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
