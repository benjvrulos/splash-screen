import { createContext, useContext, useReducer } from "react";
import { userLayout, uuidv4 } from "../utils/peopleObjectList";

const AuthContext = createContext();

const initialState = {
  id: "",
  isAuthenticated: false,
  user: "",
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "login": {
      return { isLoading: false, user: action.payload.email, isAuthenticated: true, id: action.payload.id };
    }

    case "logout": {
      return initialState;
    }
    case "rejected": {
      return { isLoading: false, error: action.payload };
    }
  }
}

function AuthProvider({ children }) {
  const [{ isAuthenticated, user, isLoading, id, error }, dispatch] = useReducer(reducer, initialState);

  async function login(email, password) {
    dispatch({ type: "loading" });
    try {
      if (email === userLayout.email && password === userLayout.password) {
        const random_uuid = uuidv4();

        dispatch({ type: "login", payload: { email, id: random_uuid } });
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "Email o correo inválidos",
      });
    }
  }

  async function logout() {
    if (isAuthenticated && user) {
      dispatch({ type: "logout" });
    }
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, isLoading, login, id, error, logout }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was used outside the AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
