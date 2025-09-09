import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { WatchlistProvider } from "./context/WatchlistContext"; // <-- ADD

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Player = lazy(() => import("./pages/Player"));
const Watchlist = lazy(() => import("./pages/Watchlist")); // <-- ADD

const App = () => {
  const { user } = useUser();

  return (
    <WatchlistProvider>
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
          {/* --- ADD WATCHLIST ROUTE --- */}
          <Route
            path="/watchlist"
            element={user ? <Watchlist /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </WatchlistProvider>
  );
};

export default App;
