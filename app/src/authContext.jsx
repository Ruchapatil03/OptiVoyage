import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './assets/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Function to log out the user
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null); // Clear the user state after successful sign-out
    }).catch((error) => {
      console.error("Error logging out:", error);
    });
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };