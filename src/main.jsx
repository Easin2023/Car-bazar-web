import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Provider from "./Provider/Provider";
import Router from "./Route/Router";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <NextUIProvider>
      <RouterProvider router={Router}></RouterProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
