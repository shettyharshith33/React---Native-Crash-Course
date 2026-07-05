import React from "react";
import {
  View,
  Text,
  Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaView>
      <View style = {{backgroundColor : "white",height:"100%"}}>
        <Text>Hello World</Text>

        <Button title="Click Me" onPress={()=>{<Text>Clicked</Text>}}/>
      </View>
    </SafeAreaView>
  );
}
export default App;