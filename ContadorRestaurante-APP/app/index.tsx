import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  // Estado para contar o número de pessoas
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para decrementar o contador
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} /> 
      <Text style={styles.titulo}>Contador Restaurante</Text>
      <Text style={styles.contador}>{contador}</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={incrementar}>
          <Text style={styles.textoBotao}>Entrou +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={decrementar}>
          <Text style={styles.textoBotao}>Saiu -</Text>
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
    backgroundColor: '#f8f8f8',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contador: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#4CAF50', // Cor do botão
    padding: 15,
    borderRadius: 5,
    width: '40%', // Largura do botão
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff', // Cor do texto do botão
    fontSize: 18,
  },
});

export default App;
