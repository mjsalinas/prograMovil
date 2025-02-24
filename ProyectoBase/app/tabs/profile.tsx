import React, { useRef, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";

export default function ProfileScreen() {
  const { user, isAllowed } = useAuth();
  //si no tengo permiso, pal login
  if (!isAllowed) return <Redirect href="/login" />;

  //hagho un arreglo de animaciones por cada propiedad del usuario
  const rowAnims = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  //hago la configuracion que tendran las animaciones
  const animacionconfig = { toValue: 1, duration: 600, useNativeDriver: true }

  //cuando incia la vista, recorro cada animacion para iniciarla, y le agrego 600 milisegundos de espera entre cada uno
  useEffect(() => {
    rowAnims.forEach((anim, index) => {
      setTimeout(() => {
        Animated.timing(anim, animacionconfig).start();
      }, index * 600);
    });
  }, []);

  //aplico la animacion
  const getRowStyle = (animValue: Animated.Value) => ({
    opacity: animValue,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/Alvaro.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.title}>Perfil de {user?.nombreCompleto}</Text>
      </View>
      <View style={styles.body}>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[0])]}>
          <Ionicons name="mail-outline" size={20} color="#333" style={styles.infoIcon} />
          <Text style={styles.infoText}>{user?.email}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[1])]}>
          <Ionicons name="person-outline" size={20} color="#333" style={styles.infoIcon} />
          <Text style={styles.infoText}>{user?.nombreCompleto}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[2])]}>
          <Ionicons name="calendar-outline" size={20} color="#333" style={styles.infoIcon} />
          <Text style={styles.infoText}>{user?.edad} años</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[3])]}>
          <Ionicons name="male-female-outline" size={20} color="#333" style={styles.infoIcon} />
          <Text style={styles.infoText}>{user?.sexo}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[4])]}>
          <Ionicons name="heart-outline" size={20} color="#333" style={styles.infoIcon} />
          <Text style={styles.infoText}>{user?.estadoCivil}</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#4C6EF5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
  body: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
});
