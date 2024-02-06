import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = ({ children }: any) => {

  const { authState: { isLoggedIn } } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/" />;
};