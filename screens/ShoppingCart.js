import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from 'react'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryFee, selectSubtotal, selectTaxes, selectTotal } from '../slices/cartSlice'
import { useNavigation } from "@react-navigation/native";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryFee);
  const taxes = useSelector(selectTaxes);
  const total = useSelector(selectTotal);
  const navigation = useNavigation();
  return (
    <>
        <View >
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            ListFooterComponent={() => (
              <View style={styles.totalContainer}>
                <View style={styles.row}>
                  <Text style={styles.text}>Subtotal</Text>
                  <Text style={styles.text}>${subTotal}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>Delivery</Text>
                  <Text style={styles.text}>${deliveryFee}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>Taxes</Text>
                  <Text style={styles.text}>{taxes}%</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.textBold}>Total</Text>
                  <Text style={styles.textBold}>${total}</Text>
                </View>
              </View>
            )}
          />
        </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Confirmation")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </>
  );
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 50,
    width: "90%",
    alignSelf: "center",
    paddingVertical: 20,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});