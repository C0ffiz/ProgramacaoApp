import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

export default function HomeScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imcResultado, setImcResultado] = useState('');
  const [tipo, setTipo] = useState(''); 


  const calculateIMC = () => {
    const weightNum = parseFloat(peso);
    const heightNum = parseFloat(altura);

    if (weightNum > 0 && heightNum > 0) {
      const imc = weightNum / (heightNum * heightNum);
      setImcResultado(imc.toFixed(2));
      if (imc < 18.5) {
        setTipo('Abaixo do peso');
      } else if (imc < 24.9) {
        setTipo('Peso normal');
      } else if (imc < 29.9) {
        setTipo('Sobrepeso');
      } else if (imc < 39.9) {
        setTipo('Obesidade');
      } else {
        setTipo('Obesidade grave');
      }
    } else {
      setImcResultado('');
      setTipo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso} 
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calculateIMC} />
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultado}>IMC: {imcResultado}</Text>
        <Text style={styles.tipo}>{tipo}</Text>
      </View>
      <Image source={require('@/assets/images/balance.png')} style={styles.imagem} />
    </View>
  );
}

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
  resultadoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tipo: {
    fontSize: 16,
    color: '#666',
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
