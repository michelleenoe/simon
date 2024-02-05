import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: '' }} style={styles.logo} />
      <Text style={styles.name}>Virksomhedsnavn</Text>
      <Text style={styles.title}>Titel</Text>
      <Text style={styles.contact}>Email: </Text>
      <Text style={styles.contact}>Telefon: </Text>
      {/* <Button title="Se Mere" onPress={() => {}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#555555',
  },
  contact: {
    fontSize: 16,
    color: '#555555',
  },
});

export default App;