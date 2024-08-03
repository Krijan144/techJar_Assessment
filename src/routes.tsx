import React from "react";
import { Login } from "./page/login";
import Dashboard from "./page/dashboard";

export const routes = [
  {
    title: "Login",
    bodyConfig: { use: false, title: false },
    path: "/login",
    component: <Login />,
    protected: true,
  },
  {
    title: "Dashboard",
    bodyConfig: { use: false, title: false },
    path: "/",
    component: <Dashboard />,
    protected: true,
  },
];
