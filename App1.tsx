import React from "react";
import{
  View,
  Text,
  SafeAreaView
} from 'react-native';

function App(){
  return(
  <SafeAreaView style={{flex: 1}}>
    <View style={{ padding: 20, backgroundColor: 'lightblue' }}>
    <View style={{ flexDirection: 'row' }}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
    </View>

      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Text style={{ fontSize: 18, color: 'darkblue' }}>Hello, this is React Native Text!</Text>

    </View>
    <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
    </View>

    <View style={{ alignItems: 'center' }}>
      <Text>Centered Text</Text>
    </View>


  </SafeAreaView>
  );
}

export default App; 