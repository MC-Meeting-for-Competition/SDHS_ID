import loadable from "@loadable/component";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/app.css";

const HomePage = loadable(() => import("./pages/Home"));
const LoginPage = loadable(() => import("./pages/auth/Login"));
const JoinPage = loadable(() => import("./pages/auth/Join"));

const AuthLayout = loadable(() => import("./components/layout/AuthLayout"));

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/home" element={<HomePage />} loader={HomePage.load} />
      </Route>
      <Route path="/auth" element={<AuthLayout />} loader={AuthLayout.load}>
        <Route
          path="/auth/login"
          element={<LoginPage />}
          loader={LoginPage.load}
        />
        <Route
          path="/auth/join"
          element={<JoinPage />}
          loader={JoinPage.load}
        />
      </Route>
    </Routes>
  );
};

export default App;
