import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);

    if (alcool > 0 && gasolina > 0) {
      const resultadoCalc = alcool / gasolina;
      if (resultadoCalc < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Por favor, insira preços válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparação de Combustíveis</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$)"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />
      <Button title="Calcular" onPress={calcularCombustivel} />
      <Text style={styles.result}>{resultado}</Text>
      <View style={styles.imageContainer}>
        {resultado === 'Abasteça com Álcool' && (
          <Image source={require('../assets/images/ethanol.png')} style={styles.image} />
        )}
        {resultado === 'Abasteça com Gasolina' && (
          <Image source={require('../assets/images/gasoline.png')} style={styles.image} />
        )}
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
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    padding: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
