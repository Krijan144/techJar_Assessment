import { Login } from "./page/login";
import Dashboard from "./page/dashboard";
import Employee from "./page/dashboard/employee";

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
    title: "Employee",
    bodyConfig: { use: false, title: false },
    path: "/employee",
    component: <Employee />,
    protected: true,
  },
];
