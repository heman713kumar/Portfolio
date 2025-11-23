import { useState } from 'react';

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (password) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setShowLogin(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return {
    isAdmin,
    showLogin,
    setShowLogin,
    handleLogin,
    logout
  };
};