import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native"



const inventario = [
    { id: '1', nombre: 'Laptop', categoria: 'Electronicos', cantidad: 5 },
    { id: '2', nombre: 'Teclado', categoria: 'Accesorios', cantidad: 10 },
    { id: '3', nombre: 'Escritorio', categoria: 'Muebles', cantidad: 15 },
]

export default function InventarioScreen() {

    return (
        <View style={style.container}>
            <Text style={style.title} >Inventario</Text>
            <FlatList
                data={inventario}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={style.item}
                    >
                        <Text style={style.text}>{item.nombre}</Text>
                        <Text style={style.text}>Categoria: {item.categoria}</Text>
                        <Text style={style.text}>Cantidad: {item.cantidad}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {flex: 1, padding:24, backgroundColor: '#f5f5f5'},
    item: { padding: 10, backgroundColor: "#fff", borderColor:"#78786d", borderWidth: 1, borderRadius:10},
    title: {fontSize: 22, fontWeight: 'bold', textAlign:'center', marginBottom:20},
    text: {fontSize: 16},
})