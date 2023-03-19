import ReactDOM from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";

import App from "./App";
import "./index.css";
import { DarkTheme } from "./theme/darkTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NextUIProvider theme={DarkTheme}>
    <App />
  </NextUIProvider>
);
