import { Text, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [logueado, setLogueado] = useState(false);
  const [contador, setContador] = useState(0);
  const [usuario, setUsuario] = useState({nombre:'', edad:0})


  useEffect(()=>{
    if(logueado){
      setTimeout(()=>{
        setUsuario((prevUsuario)=>({...prevUsuario, edad: 25}));
      },2000)
    }
  }, [logueado])

  const incrementarContador = () => {
    setContador(contador + 1);
  }

  const obtenerMensajeEdad = () => {
    if (usuario.edad < 18) {
      return "Eres menor de edad"
    } else{
      return "Eres mayor de edad"
    }
  }

  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      {/* Uso de operador ternario para toma de decisiones  */}
      {logueado ? <Text>Bienvenido</Text> : <Text>Inicia Sesion</Text>}

      {/* actualizacion de estado utilizando operadores logicos y funcion del estado  */}
      <Button title="Toggle" onPress={()=>{
        setLogueado(!logueado);
        incrementarContador();
      }}/>
      <Text>Cantidad de clicks: {contador} </Text>
      <Text> {obtenerMensajeEdad()}</Text>
    </View>
  );
}

