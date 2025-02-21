import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function ProtectedRoutes() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.replace("/login");
        }
    }, [user]);

    return <Stack />;
}

export default function RootLayout() {
    return (
        <AuthProvider>
            <ProtectedRoutes />
        </AuthProvider>
    );
}