import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Player = lazy(() => import("./pages/Player"));

const App = () => {
  const { user } = useUser();

  return (
    <>
      <ToastContainer theme="dark" />
      <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/player/:id"
            element={user ? <Player /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
