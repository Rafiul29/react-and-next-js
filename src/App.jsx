import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterationPage from "./pages/RegisterationPage";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<Profile />} path="/profile" />
        </Route>

        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
