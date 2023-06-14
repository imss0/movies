import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createGlobalStyle } from "styled-components";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const client = new QueryClient();

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color: #dddddd;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
