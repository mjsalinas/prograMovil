import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

export default function SettingsScreen() {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <View>
            <Text>
                Modo Actual: Claro | Oscuro
            </Text>
            <Text>
                Usuario: {user?.email}
            </Text>

            <TouchableOpacity
                onPress={() => { }}>
                <Text>Cambiar Tema</Text>
            </TouchableOpacity>
        </View>
    )
}