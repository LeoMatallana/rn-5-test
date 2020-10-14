import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
// import ProductDetailStack from "./src/ProductDetailStack"
import { createDrawerNavigator } from "@react-navigation/drawer";

enableScreens();

function SplashScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[1] }]}>
      <Text style={styles.lightText}>Splash Screen</Text>
      <Button title="Go to Demo" onPress={() => navigation.navigate("Demo")} />
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function NetworkError({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[2] }]}>
      <Text style={styles.lightText}>Network Error Screen</Text>
    </View>
  );
}

function Loader({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[3] }]}>
      <Text style={styles.lightText}>Loader Screen</Text>
    </View>
  );
}

function Demo({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[4] }]}>
      <Text style={styles.darkText}>Demo Screen</Text>
      <Button title="Go to Auth" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}

function Auth({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[5] }]}>
      <Text style={styles.darkText}>Auth Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function SelectMethod({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[6] }]}>
      <Text style={styles.lightText}>Select Method Screen</Text>
    </View>
  );
}

function Delivery({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[7] }]}>
      <Text style={styles.lightText}>Delivery Screen</Text>
    </View>
  );
}

function ClickAndCar({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>ClickAndCar Screen</Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[9] }]}>
      <Text style={styles.darkText}>Home Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go Splash" onPress={() => navigation.navigate("Splash")} />
      {/* <Button
        title="Go Detail"
        onPress={() => navigation.navigate("ProductDetailStack")}
      /> */}
    </View>
  );
}

function Lists({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>Lists Screen</Text>
    </View>
  );
}

function ListDetail({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>ListDetail Screen</Text>
    </View>
  );
}

function Orders({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>Orders Screen</Text>
    </View>
  );
}

function OrderDetail({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>OrderDetail Screen</Text>
    </View>
  );
}

function OrderLinear({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>OrderLinear Screen</Text>
    </View>
  );
}

function Cart({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>Cart Screen</Text>
    </View>
  );
}

function Modal({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: bgs[8] }]}>
      <Text style={styles.lightText}>Modal Screen</Text>
    </View>
  );
}

function DrawerScreen({ navigation }) {
  console.log("props", navigation);
  return (
    <View style={[styles.container, { backgroundColor: "black" }]}>
      <Text style={styles.lightText}>Drawer</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Lists"
        onPress={() => navigation.navigate("Lists")}
      />
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate("Orders")}
      />
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function mainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NetworkError" component={NetworkError} />
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="SelectMethod" component={SelectMethod} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="ClickAndCar" component={ClickAndCar} />
      <Stack.Screen name="Lists" component={Lists} />
      <Stack.Screen name="ListDetail" component={ListDetail} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="OrderLinear" component={OrderLinear} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Modal" component={Modal} />
      {/* <Stack.Screen name="ProductDetailStack" component={ProductDetailStack}  options={{ headerShown: false }}/> */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerScreen}>
        <Drawer.Screen
          name="main"
          component={mainStackNavigator}
          options={{
            gestureEnabled: true,
            swipeEnabled: true,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  lightText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  darkText: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },
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
  "#E76F51",
];
