import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

type ProfileInfoProps = {
    user: string;
    location: string;
    startedSince: string;
};

export default function ProfileInfoCard({ user, location, startedSince }: ProfileInfoProps) {
    return (
        <View style={styles.wrapper}>

            <View style={styles.container}>
                <View style={styles.infoRows}>
                    <Ionicons name="person" size={28} color="#4A90E2" />
                    <Text style={styles.text}>{user}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="location" size={20} color="#666" />
                    <Text style={styles.text}>{location}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="calendar" size={20} color="#666" />
                    <Text style={styles.text}>{`Miembro desde ${startedSince}`}</Text>
                </View>
            </View>
        </View>

    );
}
 const styles = StyleSheet.create({
    wrapper: {
        height: "30%",
    },
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 35,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    infoRows: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10,
    },
    text: {
        fontSize: 16,
        color: "#444",
        marginLeft: 8,
    }
})