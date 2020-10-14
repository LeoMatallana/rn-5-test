import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles"

function ProductDetail({ navigation }) {
  return (
    <View style={[styles.container, styles.getBg(1)]}>
      <Text style={styles.lightText}>ProductDetail Screen</Text>
      <Button
        title="Go to PromotionModal"
        onPress={() => navigation.navigate('PromotionModal')}
      />
    </View>
  );
}

function PromotionModal({ navigation }) {
  return (
    <View style={[styles.container, styles.getBg(2)]}>
      <Text style={styles.lightText}>PromotionModal Screen</Text>
      <Button
        title="Go to PromotionLinear"
        onPress={() => navigation.navigate('PromotionLinear')}
      />
    </View>
  );
}

function PromotionLinear({ navigation }) {
    return (
      <View style={[styles.container, styles.getBg(3)]}>
        <Text style={styles.darkText}>PromotionLinear Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
        title="Push Product Detaial"
        onPress={() => navigation.push('ProductDetail')}
      />
      </View>
    );
  }


const ProductDetailStack = createStackNavigator();

export default function() {
  return (
      <ProductDetailStack.Navigator initialRouteName="ProductDetail" >
        <ProductDetailStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        <ProductDetailStack.Screen name="PromotionModal" component={PromotionModal} options={{ headerShown: false }} />
        <ProductDetailStack.Screen name="PromotionLinear" component={PromotionLinear} options={{ headerShown: false }}/>
      </ProductDetailStack.Navigator>
  );
}