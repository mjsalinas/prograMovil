import { createContext, isValidElement, useContext, useState } from "react"

type User = {email: string, nombre?: string, sexo?: string} | null;

const AuthContext = createContext<{
    user: User,
    isAllowed: boolean;
    login: (email: string) => void;
    logout: () => void;
    actualizarUsuario: (nombre: string, sexo: string) => void;
} | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error ("useAuth debe usarse dentro de AuthProvider");
    return context;
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login =  (email: string) => {
        const isValidEmail = email.endsWith('.edu');

        if (isValidEmail){
            setUser({email});
            setIsAllowed(true);
        }else{
            setUser(null);
            setIsAllowed(false);
            alert("Solo correos .edu pueden ingresar")
        }
    };

    const logout = () => {
        setUser(null);
        setIsAllowed(false);
    }

    const actualizarUsuario = (nombre: string, sexo: string) => {
        setUser((prevUser) => (prevUser ? { ...prevUser, nombre, sexo } : null));
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout, actualizarUsuario}}>
            {children}
        </AuthContext.Provider>
    )
   
}