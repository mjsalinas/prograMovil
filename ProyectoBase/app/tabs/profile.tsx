import { useAuth } from "@/contexts/AuthContext";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
        const router = useRouter();
        const {user, logout} = useAuth();

        const [scaleEdit] = useState (new Animated.Value(1));
        const [scaleLogout] = useState (new Animated.Value(1));
    
        const handlePressIn = (scale: Animated.Value) => {
            Animated.timing(scale,{toValue: 0.95, duration: 100, useNativeDriver: true}).start();
        };
    
        const handlePressOut = (scale: Animated.Value) =>{
            Animated.timing(scale,{toValue: 1, duration: 100, useNativeDriver: true}).start();
        };

    // const {user} = useAuth();
    // const [nombre, setNombre] = useState('');
    
    // Codigo para limpiar estado en cambio de tabs
    // useFocusEffect (
    //     useCallback(()=>{
    //         return()=>setNombre('');
    //     }, [])
    // );
    
    return(
        // <View>
        //     <Text style={{fontSize: 24, fontWeight:'bold' }}>Perfil de {nombre}</Text>
        //     <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        // </View>

        <ScrollView contentContainerStyle={styles.container}>
            <Image
            source={require("../../assets/images/retrato.jpg")}
            style={styles.avatar}
            />

            <Text style={styles.title}>Abigail Rodriguez</Text>
            <Text style={styles.email}>abigail.rodriguez@example.com</Text>

            <View style={styles.box}>
                <View style={styles.Box2}>
                    <Ionicons name="person" size={24} color="#6136cf"/>
                    <Text style={styles.boxText}>@abigailrodriguez</Text>
                </View>
            
                <View style={styles.Box2}>
                    <Ionicons name="location" size={24} color="#6136cf"/>
                    <Text style={styles.boxText}>Buenos Aires Argentina</Text>
                </View>

                <View style={styles.Box2}>
                    <Ionicons name="calendar" size={24} color="#6136cf"/>
                    <Text style={styles.boxText}>Miembro desde 2018</Text>
                </View>

            </View>
            
            <View style={styles.ButtonBox}>
                
                <Animated.View style={[{ transform: [{ scale: scaleEdit }] }]}>
                    <TouchableOpacity
                    style={styles.Button}
                    onPressIn={()=>handlePressIn(scaleEdit)}
                    onPressOut={()=>handlePressOut(scaleEdit)}
                    >
                    <Ionicons name="create" size={24} color="white"/>
                    <Text style={styles.textButton}>Editar Perfil</Text>
                    
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[{ transform: [{ scale: scaleLogout }] }]}>
                <TouchableOpacity
                onPress={() => { logout(); router.replace("/login"); }}
                onPressIn={()=>handlePressIn(scaleLogout)}
                onPressOut={()=>handlePressOut(scaleLogout)}
                style={styles.Button2}
                >
                <Ionicons name="create" size={24} color="white"/>
                <Text style={styles.textButton}>Cerrar Sesión</Text>
                </TouchableOpacity>
                </Animated.View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        backgroundColor:"#F5F7FA"
    },
    
    avatar:{
        height: 120,
        width:120,
        borderWidth:2,
        borderColor: "blue",
        borderRadius: 60,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        paddingTop:15
    },
    email:{
        fontSize:14,
        color:"gray"
    },
    box:{
        justifyContent:"center",
        alignItems:"flex-start",
        backgroundColor:"white",
        height:170,
        width:"70%",
        borderRadius:20,
        shadowColor:"#000",
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:3,
        marginTop:20,
        marginBottom:20,
    },
    boxText:{
        fontSize:15,
        color:"black",
        marginLeft:5
    },

    Box2:{
        flexDirection:"row",
        marginLeft:15,
        marginBottom:15
    },
    Button:{
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#6136cf",
        height:45,
        width:160,
        borderRadius:10,
        marginRight:10
    },
    Button2:{
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#c7285d",
        height:45,
        width:160,
        borderRadius:10,
        marginLeft:10
    },
    textButton:{
        fontSize:18,
        color:"white"
    },

    ButtonBox:{
        flexDirection:"row",
    },
     
})