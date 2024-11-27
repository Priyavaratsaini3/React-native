import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full-screen layout
    flexDirection: 'column', // Default direction
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
  box1: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 10,
  },
  box2: {
    backgroundColor: 'lightgreen',
    padding: 20,
    margin: 10,
  },
});

export default App;
