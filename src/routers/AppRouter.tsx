import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import { BlogsIndex } from "../pages/BlogsIndexPage/BlogsIndex";
import { PrivateRoute } from "./PrivateRoute";
import { CreateBlogPage } from "../pages/CreateBlogPage/CreateBlogPage";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { Header } from "../components/shared/header/Header";
import { ThemeProvider } from "../context/ThemeContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppState>
        <Header />
        <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/blogs" element={ <BlogsIndex /> } />
              <Route path="/blogs/:id/read" element={ <BlogPage /> } />
              <Route path="/blogs/create" element={ 
                  <PrivateRoute>
                    <CreateBlogPage />
                  </PrivateRoute>
                } 
              />
              <Route path="/blogs/:id/edit" element={ 
                  <PrivateRoute>
                    <CreateBlogPage />
                  </PrivateRoute>
                } 
              />
          </Routes>
      </AppState>
    </BrowserRouter>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        { children }
      </AuthProvider>
    </ThemeProvider>
  )
};

export default AppRouter;