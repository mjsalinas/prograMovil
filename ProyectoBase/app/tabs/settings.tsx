import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "@/store/slices/usersSlice";
import { BASE_URL } from "@/config/api";
import { RootState } from "@/store/store";

export default function SettingsScreen() {
    const { theme, toggleTheme } = useTheme();
    const styles = theme === "dark" ? darkTheme : lightTheme;
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(BASE_URL + "/api/usuarios");
                dispatch(setUsers(response.data))
            }
            catch (err: any) {
                console.log("Error de Axios: ", err.message);
                console.log("Error completo: ", err.toJSON?.());
            }
        };
        fetchUsers();
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Modo Actual: Claro | Oscuro
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={toggleTheme}>
                <Text
                    style={styles.buttonText}
                >Cambiar Tema</Text>
            </TouchableOpacity>

            <View>
                <Text>Usuarios Registrados</Text>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <Text>{item.nombre}</Text>
                                <Text>{item.correo}</Text>
                            </View>)
                    }
                />
            </View>
        </View>
    )
}

