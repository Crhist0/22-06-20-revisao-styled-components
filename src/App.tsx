import { ThemeProvider } from "styled-components";
import Router from "./Router";
import lightTheme, { darkTheme } from "./Theme";

function App() {
  
  return (
    <>
                 <ThemeProvider theme={lightTheme}>
                    <Router/>
                 </ThemeProvider>
    </>
  );
}

export default App;
