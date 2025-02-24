import { createContext, isValidElement, useContext, useState } from "react"

type User = {
    email: string;
    nombreCompleto: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
} | null;

const AuthContext = createContext<{
    user: User,
    isAllowed: boolean;
    login: (email: string) => void;
    logout: () => void;
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

        const usuario: User = {
        email,
        nombreCompleto: "Alvaro Reyes",
        edad: 23,
        sexo: "Masculino",
        estadoCivil: "Soltero"
        };
          
        if (isValidEmail){
            setUser(usuario);
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

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
   
}