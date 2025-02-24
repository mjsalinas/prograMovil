import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, TextInput, Animated, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ProfileScreen() {

    const [nombre, setNombre] = useState(user?.nombre || "No especificado");
    const [sexo, setSexo] = useState(user?.sexo || "Masculino");
    const [editando, setEditando] = useState(false);

    const router = useRouter();
    const { user, logout, actualizarUsuario } = useAuth();
  
    const [scale] = useState(new Animated.Value(1));
  
    const handlePressIn = () => {
      Animated.timing(scale, { toValue: 0.95, duration: 1000, useNativeDriver: true }).start();
    };
  
    const handlePressOut = () => {
      Animated.timing(scale, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    };

    const notificacionGuardado = () => {
        actualizarUsuario(nombre, sexo);
        setEditando(false)
        alert("Sus datos fueron actualizados!");
    };
    
    return (
        <View style={styles.container}>
        <Image
        source={require("../../assets/images/profilepic.jpg")}
        style={styles.avatar}
        />
        <Text style={styles.welcomeText}>¡Hola, {user?.email || "Usuario"}!</Text>
        <Text style={styles.subText}>Bienvenido a tu panel de informacion</Text>

        <Text style={styles.subText}>Nombre Completo:</Text>
        {editando ? (
            <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Ingrese su nombre"
            />
        ) : (
            <Text style={styles.subText}>{nombre}</Text>
        )}

        <Text style={styles.subText}>Sexo:</Text>
        {editando ? (
            <View style={styles.row}>
            <TouchableOpacity
                style={[styles.radioButton, sexo === "Masculino" && styles.radioSelected]}
                onPress={() => setSexo("Masculino")}
            >
                <Text style={styles.radioText}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.radioButton, sexo === "Femenino" && styles.radioSelected]}
                onPress={() => setSexo("Femenino")}
            >
                <Text style={styles.radioText}>Femenino</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.radioButton, sexo === "Sin Especificar" && styles.radioSelected]}
                onPress={() => setSexo("Sin Especificar")}
            >
                <Text style={styles.radioText}>Sin Especificar</Text>
            </TouchableOpacity>
            </View>
        ) : (
            <Text style={styles.subText}>{sexo}</Text>
        )}
  
        <Animated.View style={[styles.animatedView, { transform: [{ scale }] }]}>
          <TouchableOpacity 
            style={editando ? styles.buttonGuardar : styles.button} 
            onPress={() => {
                if (editando) {
                  notificacionGuardado();
                } else {
                  setEditando(true);
                }
              }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Ionicons name="person-outline" size={28} color="white" />
            <Text style={styles.buttonText}>{editando ? "Guardar" : "Editar"}</Text>
          </TouchableOpacity>
        </Animated.View>
  
        <Animated.View style={[styles.animatedView, { transform: [{ scale }] }]}>
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={() => { logout(); router.replace("/login"); }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Ionicons name="log-out-outline" size={28} color="white" />
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </Animated.View>
      </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#F5F7FA",
    },
    iconMain: {
      marginBottom: 20,
    },
    avatar: {
      height: 120,
      width: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: "#4C6EF5",
    },
    welcomeText: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#3A4750",
      marginBottom: 5,
      textAlign: "center",
    },
    subText: {
      fontSize: 16,
      color: "#7D8C97",
      marginBottom: 30,
      textAlign: "center",
    },
    animatedView: {
      width: "85%",
      marginBottom: 15,
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
    buttonGuardar: {
      flexDirection: "row",
      backgroundColor: "green",
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
      paddingHorizontal: 20,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 10,
    },  
    label: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#3A4750", 
        marginBottom: 5 
    },
    input: { 
        width: "85%", 
        height: 40, 
        borderBottomWidth: 1, 
        borderBottomColor: "#4C6EF5", 
        color: "#7D8C97",
        marginBottom: 20, 
        fontSize: 16 
    },
    row: { 
        flexDirection: "row", 
        justifyContent: "center", 
        marginBottom: 20 
    },
    radioButton: { 
        padding: 10, 
        borderWidth: 1, 
        borderColor: "#4A90E2", 
        borderRadius: 10, 
        marginHorizontal: 10 
    },
    radioSelected: { 
        backgroundColor: "#4A90E2" 
    },
    radioText: { 
        fontSize: 16, 
        color: "#3A4750" 
    },
  });
  