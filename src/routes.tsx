import React from "react";
import { Login } from "./page/login";

export const authRoutes = [
  {
    title: "Login",
    bodyConfig: { use: false, title: false },
    path: "/login",
    component: <Login />,
  },
];
