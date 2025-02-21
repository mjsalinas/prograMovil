import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function ProfileScreen() {
  const { user, updateUser, logout } = useAuth();
  const [nombre, setNombre] = useState(""); // Estado temporal antes de guardar
  const router = useRouter();

  const handleSave = () => {
    updateUser({ name: nombre }); // Guarda el nombre en el contexto global
  };

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/profilepic.jpg")} style={styles.profileImage} />

      <View style={styles.infoContainer}>
        <Ionicons name="person-circle" size={30} color="#4A90E2" style={styles.icon} />
        <Text style={styles.title}>Perfil de {user?.name || "Usuario"}</Text>
      </View>

      <TextInput
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#4A90E2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 25,
},
button: {
  backgroundColor: "#4A90E2",
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 25,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  marginBottom: 15,
  marginTop:10,
},
buttonText: {
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
},
logoutButton: {
  backgroundColor: "#FF3B30",
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 25,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
logoutButtonText: {
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
},
});
