import ArticuloCard from "@/components/ArticuloCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "react-native";

export default function ArticuloScreen(){

    const router = useRouter();
    const {id, nombre, categoria, cantidad} = useLocalSearchParams();

    return(
        <ArticuloCard nombre={nombre as string} categoria={categoria as string} stock={Number(cantidad)}/>
        
    )
}