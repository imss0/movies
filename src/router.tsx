import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import MovieDetailModal from "./components/MovieDetailModal";
import MovieListLayout from "./components/MovieListLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MovieListLayout page="popular" />,
        children: [{ path: ":movieId", element: <MovieDetailModal /> }],
      },
      {
        path: "now-playing",
        element: <MovieListLayout page="playing" />,
        children: [{ path: ":movieId", element: <MovieDetailModal /> }],
      },
      {
        path: "coming-soon",
        element: <MovieListLayout page="upcoming" />,
        children: [{ path: ":movieId", element: <MovieDetailModal /> }],
      },
    ],
  },
]);
