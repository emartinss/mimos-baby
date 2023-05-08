import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home/home";
import { Register } from "./Pages/register/register";
import { Login } from "./Pages/login/login";

export const Router = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>;
};
