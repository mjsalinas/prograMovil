import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './home';
import LoginScreen from './login';

export default function Index() {
   const [user, setUser] = useState<{email: string, password:string} | null>(null);
    // const [user, setUser] = useState<{ email: string; password: string } | null>({
    //     email: 'mj@unitec.edu',
    //     password: 'pass123'
    // });

    const handleLogin = (email:string, password:string) => {
        setUser({email, password});
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <View style={styles.container}>
            {user ? ( <HomeScreen user={user} onLogout={handleLogout} />) : (<LoginScreen onLogin={handleLogin}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})