import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const inventario = [
  { id: "1", nombre: "Laptop", categoria: "Electrónicos", cantidad: 5 },
  { id: "2", nombre: "Teclado", categoria: "Accesorios", cantidad: 10 },
  { id: "3", nombre: "Escritorio", categoria: "Muebles", cantidad: 15 },
];

export default function InventarioScreen() {
      const router = useRouter();
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="cube-outline" size={32} color="#2D2E32" />
        <Text style={styles.title}>Inventario</Text>
      </View>

      <FlatList
        data={inventario}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}
          onPress={() => router.push({ pathname: `/articulo/${item.id}`, params: item })}>
            <View style={styles.itemHeader}>
              <Ionicons name="pricetag-outline" size={24} color="#4A90E2" />
              <Text style={styles.itemTitle}>{item.nombre}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="albums-outline" size={20} color="#666" />
              <Text style={styles.itemCategory}>{item.categoria}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="layers-outline" size={20} color="#666" />
              <Text style={styles.itemQuantity}>{item.cantidad} disponibles</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F7FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D2E32",
    marginLeft: 10,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  itemCategory: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#444",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
