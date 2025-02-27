import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </AuthProvider>
        </ThemeProvider>

    );
}

