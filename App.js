import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [eka, setEka] = useState (50);
  const [toka, setToka] = useState (25);
  const button1Pressed = () => {setVastaus("Result: " + (eka + toka))}
  const button2Pressed = () => {setVastaus("Result: " + (eka - toka))}
  const [vastaus, setVastaus] = useState ("");

  return (
      <View style={{flex: 1, paddingTop: 150, alignItems: 'center'}}>
        <Text>{vastaus}</Text>
        <TextInput style={styles.input}onChangeText={eka=> setEka(eka)}value={eka} keyboardType="numeric"/>
        <TextInput style={styles.input}onChangeText={toka=> setToka(toka)}value={toka} keyboardType="numeric"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button onPress={button1Pressed} title="+" />
          <Button onPress={button2Pressed} title="-" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});