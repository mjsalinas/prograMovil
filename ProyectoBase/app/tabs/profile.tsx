import { useAuth } from "@/contexts/AuthContext";
import { useFocusEffect } from "expo-router";
import { useCallback, useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet, Animated } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ProfileScreen() {
    const { user } = useAuth();
    const [nombre, setNombre] = useState(user?.name || "");
    const fadeAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    useFocusEffect(
        useCallback(() => {
            return () => setNombre(user?.name || '');
        }, [user])
    );

    const profilePicUri = user?.profilePic && typeof user.profilePic === 'string' ? { uri: user.profilePic } : require("@/assets/images/profilepic.jpg");

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
                <Image source={profilePicUri} style={styles.profileImage} />
            </Animated.View>

            <Text style={styles.title}>Perfil de {nombre}</Text>
            
            <View style={styles.inputContainer}>
                <MaterialIcons name="edit" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
            </View>
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
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Sombra
        borderRadius: 60,
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#fff",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});

