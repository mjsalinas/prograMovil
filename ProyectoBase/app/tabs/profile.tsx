import { useAuth } from "@/contexts/AuthContext"; // Importa el contexto de autenticación
import { useRouter } from "expo-router"; // Importa el enrutador para la navegación
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"; // Importa componentes de React Native
import { Ionicons } from "@expo/vector-icons"; // Importa iconos de la librería de Expo

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Obtiene el usuario y la función de cierre de sesión del contexto de autenticación
  const router = useRouter(); // Inicializa el enrutador

  // Función para cerrar sesión y redirigir al usuario a la pantalla de inicio de sesión
  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      {/* Muestra la imagen de perfil del usuario o una imagen predeterminada */}
      <Image 
        source={user?.profilePic ? { uri: user.profilePic } : require("../../assets/images/profilepic.jpg")} 
        style={styles.avatar} 
      />
      
      {/* Muestra el nombre y correo del usuario */}
      <Text style={styles.name}>{user?.name || "Usuario"}</Text>
      <Text style={styles.email}>{user?.email || "email@example.com"}</Text>

      {/* Contenedor con información adicional del usuario */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}><Ionicons name="person" size={16} color="#4C6EF5" /> @{user?.username || "NixonRosales"}</Text>
        <Text style={styles.infoText}><Ionicons name="location" size={16} color="#4C6EF5" /> {user?.location || "San Pedro Sula"}</Text>
        <Text style={styles.infoText}><Ionicons name="calendar" size={16} color="#4C6EF5" /> Miembro desde {user?.memberSince || "2025"}</Text>
      </View>

      {/* Botón para editar el perfil */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botón para cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos para los componentes de la pantalla de perfil
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#F5F7FA",
  },
  avatar: {
    height: 130,
    width: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "#4C6EF5",
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: "90%",
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
