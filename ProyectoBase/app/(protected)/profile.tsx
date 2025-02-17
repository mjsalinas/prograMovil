import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, Animated, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import ProfileInfoCard from "@/components/ProfileInfoCard";

export default function ProfileScreen() {
    const { user, logout } = useAuth();
    const [scale1] = useState(new Animated.Value(1));
    const [scale2] = useState(new Animated.Value(1));
    const router = useRouter();

    // codigo para limpiar estado en cambio de tabs
    // useFocusEffect(
    //     useCallback(() => {
    //         return () => setNombre('');
    //     }, [])
    // );
    const handlePressIn = (scale: Animated.Value) => {
        Animated.timing(scale, { toValue: 0.95, duration: 1000, useNativeDriver: true }).start();
    };

    const handlePressOut = (scale: Animated.Value) => {
        Animated.timing(scale, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollcontainer} showsVerticalScrollIndicator={true}>
                    <Image
                        source={require("../../assets/images/profilepic.jpg")}
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>Juan Perez</Text>
                    <Text style={styles.userEmail}>juan.perez@example.edu</Text>
                    <ProfileInfoCard user={'@juanperez'} location={'Ciudad de Mexico'} startedSince={'2022'} ></ProfileInfoCard>
                    <View style={styles.buttonsContainer}>
                        <Animated.View style={[styles.animatedView, { transform: [{ scale: scale1 }] }]}>
                            <TouchableOpacity
                                style={styles.editProfileButton}
                                onPressIn={() => handlePressIn(scale1)}
                                onPressOut={() => handlePressOut(scale1)}
                            >
                                <Ionicons name="log-out-outline" size={16} color="white" />
                                <Text style={styles.buttonText}>Editar Perfil</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[styles.animatedView, { transform: [{ scale: scale2 }] }]}>
                            <TouchableOpacity
                                style={styles.logoutButton}
                                onPress={() => { logout(); router.replace("/login"); }}
                                onPressIn={() => handlePressIn(scale2)}
                                onPressOut={() => handlePressOut(scale2)}
                            >
                                <Ionicons name="log-out-outline" size={16} color="white" />
                                <Text style={styles.buttonText}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
    },
    scrollcontainer: {
        alignItems: "center",
        paddingVertical: 20,
        flexGrow: 1,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        marginTop: 50,
        width: "100%",
        backgroundColor: "#F5F7FA",
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#4C6EF5",
    },
    userName: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#3A4750",
        marginBottom: 5,
        textAlign: "center",
    },
    userEmail: {
        fontSize: 16,
        color: "#7D8C97",
        marginBottom: 30,
        textAlign: "center",
    },
    animatedView: {
        width: "50%",
        marginHorizontal: 10,
        marginBottom: 15,
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#4A90E2",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    logoutButton: {
        flexDirection: "row",
        backgroundColor: "#D9534F",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        width: "80%",
        shadowRadius: 5,
        elevation: 5,
    },
    editProfileButton: {
        flexDirection: "row",
        backgroundColor: "#4A90E2",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        width: "80%",
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
});
