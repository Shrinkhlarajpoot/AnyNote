import { createContext, useContext, useEffect, useState } from "react";
const Authcontext = createContext();
const useAuth = () => useContext(Authcontext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: ""});
  const token = localStorage.getItem("token");
  const [showpassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth({ token:token});
    } else {
      setAuth({ token: ""});
    }
  }, [token]);

  return (
    <Authcontext.Provider
      value={{ auth, setAuth, showpassword, setShowPassword }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export { useAuth, AuthProvider };