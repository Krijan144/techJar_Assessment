import { Route, BrowserRouter, Routes } from "react-router-dom";
import { authRoutes, routes } from "./routes";
import Layout from "./ui/container/layout";

function App(): React.ReactNode {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Layout>
        <Routes>
          {authRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
