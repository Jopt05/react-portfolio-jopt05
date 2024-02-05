import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppState>
        <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/login" element={ <LoginPage /> } />
          </Routes>
      </AppState>
    </BrowserRouter>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
};

export default AppRouter;