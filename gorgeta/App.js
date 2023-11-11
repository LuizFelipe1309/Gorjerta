import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [valor, setvalor] = useState(0)
  const [porcetagem, setporcentagem] = useState(0)
  const [result, setresult] = useState(0)
  const [total, settotal] = useState(0)

  useEffect(() => {
    setresult (result)
    setvalor (valor)
    setporcentagem (porcetagem)
    settotal (total)
  })

  function calcular() {
    
    settotal (valor + result)
    if (valor == 0 || porcetagem == 0){
      alert("Digite um valor para a gorjeta e/ou para a conta")}
      else{
        setresult (valor * (porcetagem / 100))
        settotal (valor + (valor * (porcetagem / 100)))
      }
      Keyboard.dismiss()
  }
  
  function reset() {
    if (valor == 0 || porcetagem == 0){
      alert("Digite um valor para a gorjeta e/ou para a conta")}
      else{
        setvalor('')
        setporcentagem('')
        setresult(0)
        settotal(0)
      }
      Keyboard.dismiss()
  }
  

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>GORJETA</Text>
      <Image style={styles.img} source={require('./assets/din.png')}/>
      <TextInput
      placeholder='VALOR (R$)'
      value = {valor}
      onChangeText={(Valor) => setvalor(Number(Valor))}
      keyboardType='numeric'
      style={styles.textinput}/>

      <TextInput
      placeholder='PORCETAGEM (%)'
      value= {porcetagem}
      onChangeText={(Porcetagem) => setporcentagem(Number(Porcetagem))}
      keyboardType='numeric'
      style={styles.textinput}/>
      

      <TouchableOpacity style={styles.calc} onPress={calcular}>
        <Text>CALCULAR GORJETA</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.calc} onPress={reset}>
        <Text>CALCULAR NOVAMENTE</Text>
      </TouchableOpacity>

      <Text style={styles.result}>Valor da gorjeta: R${result}</Text>
      <Text style={styles.total}>Valor da do total: R${total}</Text>


      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4bae4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    fontWeight: 'bold', 
    fontSize: 60
  },
  img: {
    width:250,
    height:250
  },
  textinput: {
    width: 350,
    height: 50,
    borderRadius: 15,
    borderWidth: 5,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: '#c8e986',
    fontWeight: 'bold'
  },
  calc: {
    marginTop: 10,
    borderWidth: 5,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#c8e986'
  },
  result: {
    fontSize: 30,
    top: 30,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 30,
    top: 50,
    fontWeight: 'bold',
  },
});