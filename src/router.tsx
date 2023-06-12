import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Popular from "./pages/Popular";
import Playing from "./pages/Playing";
import Upcoming from "./pages/Upcoming";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
      {
        path: "now-playing",
        element: <Playing />,
      },
      {
        path: "coming-soon",
        element: <Upcoming />,
      },
    ],
  },
]);
