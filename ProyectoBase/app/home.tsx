import CustomInput from "@/components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
           <View style={styles.content}>
            <CustomInput 
                label="Correo Electronico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                validationRule={(text)=>text.includes('@')}
                errorMessage ="Correo invalido"
            />

<CustomInput 
                label="Contraseña"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                validationRule={(text)=>text.includes('@')}
                errorMessage ="Correo invalido"
                secureTextEntry={true}
            />
           </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C6EF5'
    },
    content: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#364FC7',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        margin: 10
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
    }
})