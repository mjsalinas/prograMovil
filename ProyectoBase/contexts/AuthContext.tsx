import { createContext, useContext, useState } from "react";
import { useRouter } from "expo-router"; // Cambia esto

type User = { email: string; name: string } | null;

const AuthContext = createContext<{
  user: User;
  isAllowed: boolean;
  login: (email: string) => void;
  logout: () => void;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const router = useRouter(); // Cambia esto

  const login = (email: string) => {
    const isValidEmail = email.endsWith(".edu");

    if (isValidEmail) {
      setUser({ email, name: "Wilmer Sanchez" }); // Nombre predeterminado
      setIsAllowed(true);
    } else {
      setUser(null);
      setIsAllowed(false);
      alert("Solo correos .edu pueden ingresar");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAllowed(false);
    router.replace("/login"); // Cambia esto
  };

  return (
    <AuthContext.Provider value={{ user, isAllowed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};