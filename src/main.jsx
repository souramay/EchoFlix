import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/redux/appStore";

import App from "./App";
import Login from "./components/Login";
import Browse from "./components/Browse";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Search from "./components/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // Layout component
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "browse", element: <Browse /> },
      { path: "search", element:<Search/>  },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
