import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LogoSpinner from "./components/LogoSpinner";
import AppLayout from "./pages/AppLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
const Login = lazy(() => import("./pages/Login"));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={loading ? <LogoSpinner /> : <Login />}
          />
          <Route
            index
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
