import React, { createContext, useState, useEffect } from "react";
// import { getDoc, doc, getFirestore } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const AuthProvider = (props) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(true);
        // getProfile();
      } else {
        setUser(false);
      }
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
