import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;