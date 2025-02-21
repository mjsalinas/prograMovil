import { createContext, useContext, useState } from "react";

type User = {
    email: string;
    name?: string;  // Agregamos el nombre del usuario
    avatar?: string; // Agregamos avatar del usuario
} | null;

const AuthContext = createContext<{
    user: User;
    isAllowed: boolean;
    login: (email: string) => void;
    logout: () => void;
    updateUser: (newData: Partial<User>) => void; // Nueva función para actualizar datos del usuario
} | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login = (email: string) => {
        const isValidEmail = email.endsWith(".edu");

        if (isValidEmail) {
            setUser({ email, name: "Usuario", avatar: "@/assets/profile.jpg" }); // Nombre y avatar por defecto
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
    };

    const updateUser = (newData: Partial<User>) => {
        setUser((prevUser) => (prevUser ? { ...prevUser, ...newData } : null));
    };

    return (
        <AuthContext.Provider value={{ user, isAllowed, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
