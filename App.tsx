import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyButton } from "./components/Button/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#ff0000",
  },
  spacer: {
    flex: 1,
    backgroundColor: "#0000ff"
  }
});

function App() {

  const onButtonPressed = () => {
  }

  return (
    <View style={styles.container}>
      <View style={styles.spacer}>

      </View>
      <View style={{ flex: 0.25, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{flex: 1}}>Open up App.tsx to start working on your app!</Text>
          <MyButton onPress={onButtonPressed} text="OHai" />

      </View>
      <View style={styles.spacer}>

      </View>


    </View>
  );
}

let AppEntryPoint = App;
// Some comment? 

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
