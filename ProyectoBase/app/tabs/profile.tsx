import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  // Animación para el botón "Editar Perfil"
  const scaleValueEdit = useRef(new Animated.Value(1)).current;
  const [isPressedEdit, setIsPressedEdit] = useState(false);

  // Animación para el botón "Cerrar Sesión"
  const scaleValueLogout = useRef(new Animated.Value(1)).current;
  const [isPressedLogout, setIsPressedLogout] = useState(false);

  // Función para manejar el evento "onPressIn"
  const handlePressIn = (scaleValue: Animated.Value, setIsPressed: React.Dispatch<React.SetStateAction<boolean>>) => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    setIsPressed(true);
  };

  // Función para manejar el evento "onPressOut"
  const handlePressOut = (scaleValue: Animated.Value, setIsPressed: React.Dispatch<React.SetStateAction<boolean>>) => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    setIsPressed(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/profilepic.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user?.name || "Usuario"}</Text>
          <Text style={styles.email}>{user?.email || "Correo no disponible"}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Ionicons name="person" size={24} color="#4C6EF5" />
            <Text style={styles.infoText}>@juanperez</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location" size={24} color="#4C6EF5" />
            <Text style={styles.infoText}>Ciudad de México</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={24} color="#4C6EF5" />
            <Text style={styles.infoText}>Miembro desde 2022</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {/* Botón "Editar Perfil" */}
          <Animated.View style={{ transform: [{ scale: scaleValueEdit }] }}>
            <TouchableOpacity
              style={[styles.buttonEdit, isPressedEdit && styles.buttonEditPressed]}
              onPressIn={() => handlePressIn(scaleValueEdit, setIsPressedEdit)}
              onPressOut={() => handlePressOut(scaleValueEdit, setIsPressedEdit)}
              onPress={() => alert("Editar perfil")}
            >
              <Ionicons name="create" size={20} color="white" />
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Botón "Cerrar Sesión" */}
          <Animated.View style={{ transform: [{ scale: scaleValueLogout }] }}>
            <TouchableOpacity
              style={[styles.buttonLogout, isPressedLogout && styles.buttonLogoutPressed]}
              onPressIn={() => handlePressIn(scaleValueLogout, setIsPressedLogout)}
              onPressOut={() => handlePressOut(scaleValueLogout, setIsPressedLogout)}
              onPress={() => { logout(); router.replace("/login"); }}
            >
              <Ionicons name="log-out" size={20} color="white" />
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4C6EF5",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  infoContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  buttonEdit: {
    flexDirection: "row",
    backgroundColor: "#4C6EF5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  buttonEditPressed: {
    backgroundColor: "#3B5BDB", // Color más oscuro al presionar
  },
  buttonLogout: {
    flexDirection: "row",
    backgroundColor: "#FF4C4C",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  buttonLogoutPressed: {
    backgroundColor: "#CC0000", // Color más oscuro al presionar
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});

