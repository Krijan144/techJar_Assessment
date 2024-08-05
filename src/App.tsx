import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { authRoutes, routes } from "./routes";
import Layout from "./ui/container/layout";
import Toast from "./ui/component/toast";
import { AppState } from "./store/reducer";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

const PrivateRoute = ({ children }: any) => {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }: any) => {
  const token = sessionStorage.getItem("token");
  return token ? <Navigate to="/" /> : children;
};
const App = ({ notification }: any): React.ReactNode => {
  useEffect(() => {
    if (notification.length) {
      notification[0].level === "success"
        ? toast.success(notification[0].message)
        : toast.warning(notification[0].message);
    }
  }, [notification]);

  return (
    <>
      <Toast />
      <BrowserRouter>
        <Routes>
          {authRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<PublicRoute>{route.component}</PublicRoute>}
            />
          ))}
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    {routes.map((route, idx) => (
                      <Route
                        key={idx}
                        path={route.path}
                        element={route.component}
                      />
                    ))}
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = ({ appState: { notification } }: AppState) => ({
  notification,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
