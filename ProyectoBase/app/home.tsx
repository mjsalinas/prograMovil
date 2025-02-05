import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface HomeScreenProps {
    user: { email: string; password: string },
    onLogout: () => void;
}

export default function HomeScreen({ user, onLogout }: HomeScreenProps) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons style={styles.headerIcon} name="home-outline" size={32} color="#fff" />
                    <Text style={styles.headerText}>Bienvenido, {user.email}</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C6EF5'
    },
    header: {
        backgroundColor: '#364FC7',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        margin: 10
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
    }
})