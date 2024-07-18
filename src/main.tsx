import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";

import Error from "./routes/error";
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";
import Services from "./routes/services";
import Work from "./routes/work";
import Service from "./routes/service";
import ServiceLoader from "./routes/service/loader";
import Client from "./routes/client";
import ClientLoader from "./routes/client/loader";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          { path: "/about-me", element: <About /> },
          { path: "/services", element: <Services /> },
          {
            path: "/service/:service",
            element: <Service />,
            loader: ServiceLoader,
          },
          { path: "/my-work", element: <Work /> },
          { path: "/work/:client", element: <Client />, loader: ClientLoader },
          { path: "/hire-me", element: <Contact /> },
          { path: "/contact-me", element: <Contact /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
