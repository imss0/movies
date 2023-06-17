import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Popular from "./pages/Popular";
import Playing from "./pages/Playing";
import Upcoming from "./pages/Upcoming";
import MovieDetailModal from "./components/MovieDetailModal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
        children: [{ path: "/:movieId", element: <MovieDetailModal /> }],
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
