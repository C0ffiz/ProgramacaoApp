import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Importando as imagens
const imagemPedra = require('../assets/images/pedra.png');
const imagemPapel = require('../assets/images/papel.png');
const imagemTesoura = require('../assets/images/tesoura.png');
const imagemPadrao = require('../assets/images/padrao.png');  // Imagem padrão

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState<string>('');  
  const [escolhaApp, setEscolhaApp] = useState<string>('');  
  const [resultado, setResultado] = useState<string>('');  
  const [imagemApp, setImagemApp] = useState<any>(imagemPadrao);  // Definindo a imagem padrão inicialmente

  const opcoes: string[] = ['Pedra', 'Papel', 'Tesoura'];

  const jogar = (escolha: string) => { 
    const escolhaAleatoria: string = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaAleatoria);
    definirImagemApp(escolhaAleatoria);  
    determinarResultado(escolha, escolhaAleatoria);
  };

  const definirImagemApp = (escolha: string) => {
    if (escolha === 'Pedra') {
      setImagemApp(imagemPedra);
    } else if (escolha === 'Papel') {
      setImagemApp(imagemPapel);
    } else if (escolha === 'Tesoura') {
      setImagemApp(imagemTesoura);
    } else {
      setImagemApp(imagemPadrao);  // Definindo a imagem padrão caso não tenha escolha
    }
  };

  const determinarResultado = (usuario: string, app: string) => {  
    if (usuario === app) {
      setResultado('Empate');
    } else if (
      (usuario === 'Pedra' && app === 'Tesoura') ||
      (usuario === 'Tesoura' && app === 'Papel') ||
      (usuario === 'Papel' && app === 'Pedra')
    ) {
      setResultado('Você Ganhou!');
    } else {
      setResultado('Você Perdeu!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => jogar('Pedra')}>
          <Text style={styles.textoBotao}>Pedra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => jogar('Papel')}>
          <Text style={styles.textoBotao}>Papel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => jogar('Tesoura')}>
          <Text style={styles.textoBotao}>Tesoura</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.texto}>Sua escolha: {escolhaUsuario || 'Nenhuma'}</Text>
      <Text style={styles.texto}>Escolha do app: {escolhaApp || 'Nenhuma'}</Text>
      
      <Image source={imagemApp} style={styles.imagem} />  {/* Exibe a imagem, incluindo a padrão se não houver escolha */}
      
      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}  {/* Certifique-se de que o resultado só será exibido se houver um valor */}

      <TouchableOpacity style={styles.botao} onPress={() => {
        setEscolhaUsuario('');
        setEscolhaApp('');
        setResultado('');
        setImagemApp(imagemPadrao);  // Reseta para a imagem padrão
      }}>
        <Text style={styles.textoBotao}>Jogar Novamente</Text>
      </TouchableOpacity>
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
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
  },
  texto: {
    fontSize: 18,
    marginVertical: 10,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default App;
