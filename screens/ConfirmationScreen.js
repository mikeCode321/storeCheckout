import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from 'react'
import { useSelector } from 'react-redux';

import { selectQuantity, selectTotal } from '../slices/cartSlice';

const ConfirmationScreen = () => {
    const quantity = useSelector(selectQuantity);
    const total = useSelector(selectTotal);

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Slick Shirts</Text>
      <View style={styles.confirmation}>
        <Text style={styles.thanks}>
          Thank you for shopping with us!
        </Text>
        <Text style={styles.text}>You purchased: {quantity} shirts</Text>
        <Text style={styles.text}>Your total is: ${total}</Text>
      </View>
    </SafeAreaView>
  );
}

export default ConfirmationScreen

const styles = StyleSheet.create({
  title: {
    top: 170,
    fontSize: 50,
    fontWeight: '200',
    letterSpacing: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thanks: {
    marginBottom: 40,
    fontWeight: '300',
    fontSize: 20
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5
  }
});