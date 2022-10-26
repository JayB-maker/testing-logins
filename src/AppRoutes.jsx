import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
