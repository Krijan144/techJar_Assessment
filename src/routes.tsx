import { Login } from "./page/login";
import Dashboard from "./page/dashboard";
import Employer from "./page/dashboard/employer";

export const authRoutes = [
  {
    title: "Login",
    bodyConfig: { use: false, title: false },
    path: "/login",
    component: <Login />,
    protected: true,
  },
];
export const routes = [
  {
    title: "Dashboard",
    bodyConfig: { use: false, title: false },
    path: "/",
    component: <Dashboard />,
    protected: true,
  },
  {
    title: "Employer",
    bodyConfig: { use: false, title: false },
    path: "/employer",
    component: <Employer />,
    protected: true,
  },
];
