import { Route, BrowserRouter, Routes } from "react-router-dom";
import { authRoutes } from "./routes";

function App(): React.ReactNode {
  return (
    <>
      <BrowserRouter>
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
