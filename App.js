import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SplashScreen() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[1]}]}>
      <Text style={styles.lightText}>Splash Screen</Text>
    </View>
  );
}

function NetworkError() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[2]}]}>
      <Text style={styles.lightText}>Network Error Screen</Text>
    </View>
  );
}

function Loader() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[3]}]}>
      <Text style={styles.lightText}>Loader Screen</Text>
    </View>
  );
}

function Demo() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[4]}]}>
      <Text style={styles.lightText}>Demo Screen</Text>
    </View>
  );
}

function Auth() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[5]}]}>
      <Text style={styles.lightText}>Auth Screen</Text>
    </View>
  );
}

function SelectMethod() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[6]}]}>
      <Text style={styles.lightText}>Select Method Screen</Text>
    </View>
  );
}

function Delivery() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[7]}]}>
      <Text style={styles.lightText}>Delivery Screen</Text>
    </View>
  );
}

function ClickAndCar() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[8]}]}>
      <Text style={styles.lightText}>ClickAndCar Screen</Text>
    </View>
  );
}

function Home() {
  return (
    <View style={[styles.container, {backgroundColor: bgs[9]}]}>
      <Text style={styles.darkText}>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
 lightText: {
   color: "white"
 },
 darkText: {
  color: "black"
}
});

const bgs = [
  "#EC0B43",
  "#EC0B43",
  "#2C1530",
  "#7AE7C7",
  "#D6FFB7",
  "#FFF689",
  "#264653",
  "#2A9D8F",
  "#E9C46A",
  "#F4A261",
  "#E76F51"
]