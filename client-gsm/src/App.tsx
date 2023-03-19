import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { DarkTheme } from "./theme/darkTheme";
import { store } from "./store/store";

function App() {
  return (
    <NextUIProvider theme={DarkTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
