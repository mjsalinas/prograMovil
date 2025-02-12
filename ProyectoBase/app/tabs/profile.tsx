import { useAuth } from "@/contexts/AuthContext";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function ProfileScreen() {
    const { user } = useAuth();
    const [nombre, setNombre] = useState('');

// codigo para limpiar estado en cambio de tabs
    // useFocusEffect(
    //     useCallback(() => {
    //         return () => setNombre('');
    //     }, [])
    // );

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Perfil de {nombre}</Text>
            <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        </View>
    );
}