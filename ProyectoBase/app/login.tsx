import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface LoginScreenProps {
    onLogin: (email: string, password: string) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnLogin = () => {
        onLogin(email, password);
    }

    return (
        <View>
            <Text>Iniciar Sesion</Text>
            <TextInput
                placeholder="Correo electronico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Iniciar Sesion" onPress={handleOnLogin} />
        </View>
    );
}