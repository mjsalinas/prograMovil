import { useAuth } from "@/contexs/AuthContex";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";

export default function ProfileScreen(){
    const router = useRouter ();
    const {user, logout} = useAuth();
    const [email, setEmail] = useState ('')
    const [nombre, setNombre] = useState('');


    //useFocusEffect(
    //    useCallback(()=>{
     //       return ()=> setNombre('');
       // },[])
    //);

    return (
      <View style={styles.container}>
          < Image 
                 source={require ("../../assets/images/perfil.jpg")}
                 style={styles.logo}
                 />
        {/* Encabezado del perfil */}
        <Image></Image>
        <View style={styles.header}>
            <Text style={styles.name}>Arnold Oviedo</Text>
            <Text style={styles.email}>arnoldoviedo@ceutec.edu</Text>
          </View>

        <View style={styles.profileInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="person" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.text}>@arnoldoviedo</Text>
          </View>
  
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.text}>San Pedro Sula</Text>
          </View>
  
          <View style={styles.infoRow}>
          <Ionicons name="calendar" size={28} color="#007bff" style={styles.icon}/>
            <Text style={styles.text}>Miembro desde 2023</Text>
          </View>
        </View>
  
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={()=> {router.push('/tabs/settings')}}>
          <Ionicons name="create" size={28} color="white" style={styles.icon}/>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogout} onPress={()=> {logout(); router.replace('/login')}}>
          <Ionicons name="exit" size={28} color="white" style={styles.icon}/>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    profileInfo: {
      width: '60%',
      padding: 10,
      marginBottom: 30,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
    
    },
    email: {
      fontSize: 16,
      color: '#777',
    },
    header: {
      alignItems:'center',
      marginBottom:20,
    },
    text: {
      fontSize: 14,
      color: '#555',
      marginLeft: 5,
    },
    icon: {
      marginRight: 10,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
      borderRadius: 75,
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      flexDirection: 'row',
    },
    buttonLogout: {
      backgroundColor: '#FF4C4C',
      padding: 10,
      borderRadius: 5,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      flexDirection: 'row',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  