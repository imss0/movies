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
        element: <MovieListLayout prop="popular" />,
        children: [
          { path: ":movieId", element: <MovieDetailModal prop="popular" /> },
        ],
      },
      {
        path: "now-playing",
        element: <MovieListLayout prop="playing" />,
        children: [
          { path: ":movieId", element: <MovieDetailModal prop="popular" /> },
        ],
      },
      {
        path: "coming-soon",
        element: <MovieListLayout prop="upcoming" />,
        children: [
          { path: ":movieId", element: <MovieDetailModal prop="popular" /> },
        ],
      },
    ],
  },
]);
