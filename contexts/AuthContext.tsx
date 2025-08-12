import { createContext } from "react";

interface AuthContextTypes {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthContext = createContext<AuthContextTypes>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export default AuthContext;
