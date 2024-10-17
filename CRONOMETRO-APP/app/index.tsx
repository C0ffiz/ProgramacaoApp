import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [tempo, setTempo] = useState(0); // Tempo em milissegundos
  const [cronometroAtivo, setCronometroAtivo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 10); // Incrementa o tempo a cada 10 ms
      }, 10);
    }

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [cronometroAtivo]);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor((tempo / 60000) % 60);
    const segundos = Math.floor((tempo / 1000) % 60);
    const milissegundos = Math.floor((tempo % 1000) / 10);
    return `${minutos < 10 ? '0' : ''}${minutos}:${
      segundos < 10 ? '0' : ''
    }${segundos}:${milissegundos < 10 ? '0' : ''}${milissegundos}`;
  };

  const iniciarCronometro = () => {
    setCronometroAtivo(true);
  };

  const pausarCronometro = () => {
    setCronometroAtivo(false);
  };

  const reiniciarCronometro = () => {
    setCronometroAtivo(false);
    setTempo(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>{formatarTempo(tempo)}</Text>
      <View style={styles.botoes}>
        <Button title="Iniciar" onPress={iniciarCronometro} />
        <Button title="Pausar" onPress={pausarCronometro} />
        <Button title="Reiniciar" onPress={reiniciarCronometro} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  tempo: {
    fontSize: 48,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default App;
