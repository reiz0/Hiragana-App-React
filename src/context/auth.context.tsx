import { createContext, ReactNode, useState } from "react";
import { createUserService, loginService } from "../services/auth.service";
import {
  LoginUserType,
  NewUserType,
  User
} from "../types/types";

const INITIAL_STATE = {
  currentUser: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  storeNewScore: () => {},
};

type ContextType = {
  currentUser: User | null;
  login: (payload: LoginUserType) => void;
  register: (payload: NewUserType) => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<ContextType>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (payload: LoginUserType) => {
    const user = await loginService(payload);
    setCurrentUser(user);
  };

  const register = async (payload: NewUserType) => {
    const user = await createUserService(payload);
    setCurrentUser(user);
  };

  const logout = async () => {
    setCurrentUser(null);
  }; 

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
