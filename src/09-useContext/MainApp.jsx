import { /* Navigate, Routes, Route, */ Outlet } from "react-router-dom";
import { /* AboutPage, HomePage, LoginPage,  */ Navbar } from "./";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp </h1>
      <Navbar />
      <hr />

      <div>
        <Outlet />
      </div>
      {
        /* <Route path="/*" element={<LoginPage />} /> */
        //Codigo ,al hecho
      }
      {
        /* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes> */
        //Versión vieja
      }
    </>
  );
};
