import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    console.log('v ' + valor)
    console.log('r ' + result)
    console.log('p ' + porcetagem)
    console.log('t ' + total)
  })

  function calcular() {
    
    settotal (valor + result)
    if (valor == 0 || porcetagem == 0){
      alert("Preencha todos os campos")}
      else{
        setresult (valor * (porcetagem / 100))
        settotal (valor + (valor * (porcetagem / 100)))
      }
  }
  
  function reset() {
    if (valor == 0 || porcetagem == 0){
      alert("Preencha todos os campos")}
      else{
        setvalor(0)
        setporcentagem(0)
        setresult(0)
        settotal(0)
      }
  }
  
  useEffect(() => {
    setvalor (valor)
    setporcentagem (porcetagem)
  })

  return (
    <View style={styles.container}>

      <Text style={{bottom: 100, fontWeight: 'bold', fontSize: 60}}>GORJETA</Text>
      <TextInput
      placeholder='VALOR'
      value = {valor}
      onChangeText={(Valor) => setvalor(Number(Valor))}
      keyboardType='numeric'
      style={styles.textinput}/>

      <TextInput
      placeholder='PORCETAGEM'
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

      <Text style={styles.result}>Valor da gorjeta</Text>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.total}>Valor da do total</Text>
      <Text style={styles.total}>{total}</Text>

      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 250,
    height: 50,
    borderRadius: 15,
    borderWidth: 5,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  calc: {
    marginTop: 40,
    borderWidth: 5,
    borderRadius: 30,
    padding: 10,
  },
  result: {
    fontSize: 50,
    top: 50,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 50,
    top: 90,
    fontWeight: 'bold',
  },
});