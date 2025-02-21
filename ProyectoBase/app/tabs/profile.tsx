import { useAuth } from "@/contexts/AuthContext";
import { useFocusEffect } from "expo-router";
import { useCallback, useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
    const { user } = useAuth();
    const [nombre, setNombre] = useState(user?.name || "");

    useFocusEffect(
        useCallback(() => {
            return () => setNombre(user?.name || '');
        }, [user])
    );

    return (
        <View style={styles.container}>
            {user?.profilePic ? (
                <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
            ) : (
                <Image source={require("@/assets/images/profilepic.jpg")} style={styles.profileImage} />
            )}

            <Text style={styles.title}>Perfil de {nombre}</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#fff",
    },
});


