import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { DarkTheme } from "./theme/darkTheme";

function App() {
  return (
    <NextUIProvider theme={DarkTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
