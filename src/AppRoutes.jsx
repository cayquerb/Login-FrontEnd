import React, { useContext } from "react";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { AuthContext, AuthProvider } from "./contexts/auth";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

            return children;
    }
    return ( 
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route 
                    exact path="/" 
                    element={
                        <Private>
                            <MainPage />
                        </Private>
                    }
                />
            </Routes>
            </AuthProvider>
        </Router>
     );
}
 
export default AppRoutes;