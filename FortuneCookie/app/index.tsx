import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Importing StatusBar from expo-status-bar

// Importing the images
const imagensBiscoito = [
  require('../assets/images/frame_0_delay-0.8s.gif'),
  require('../assets/images/frame_1_delay-0.8s.gif'),
  require('../assets/images/frame_2_delay-0.8s.gif'),
  require('../assets/images/frame_3_delay-0.8s.gif'),
  require('../assets/images/frame_4_delay-0.8s.gif'),
  require('../assets/images/frame_5_delay-2s.gif'),
];

const frasesDeSorte = [
  "A sorte favorece os audazes.",
  "Um momento de paciência pode prevenir um grande desastre.",
  "A vida é feita de escolhas.",
  "A persistência é o caminho do êxito.",
  "A felicidade é um estado de espírito.",
  "Acredite em si mesmo e todo o resto virá.",
];

const App = () => {
  const [indiceImagem, setIndiceImagem] = useState(0);
  const [frase, setFrase] = useState('');

  const quebrarBiscoito = () => {
    if (indiceImagem < imagensBiscoito.length - 1) {
      setIndiceImagem(indiceImagem + 1);
    } else {
      // Choose a random fortune phrase
      const fraseAleatoria = frasesDeSorte[Math.floor(Math.random() * frasesDeSorte.length)];
      setFrase(fraseAleatoria);
      // Reset to the first image
      setIndiceImagem(0);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.touchable}>
        <Image 
          source={imagensBiscoito[indiceImagem]} 
          style={styles.imagem} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      {indiceImagem === imagensBiscoito.length - 1 && frase ? (
        <View style={styles.fraseContainer}>
          <Text style={[styles.frase, { color: '#804D24' }]}>{frase}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEA3',
  },
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
  fraseContainer: {
    position: 'absolute',
    top: '50%',
    bottom: '42%',
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -50 }],
  },
  frase: {
    fontSize: 11,
    width: '90%',
    textAlign: 'center',
    maxWidth: 200,
  },
});

export default App;
