import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';
import {cartSlice} from '../slices/cartSlice'

const CartListItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: 1
      }))
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
     productId: cartItem.product.id,
     amount: -1,
   })
 );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={cartItem.product.mainImg} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{cartItem.product.name}</Text>
          <Text style={styles.size}>Size {cartItem.product.size}</Text>

          <View style={styles.footer}>
            <Feather
              onPress={decreaseQuantity}
              name="minus-circle"
              size={24}
              color="gray"
            />
            <Text style={styles.quantity}>{cartItem.quantity}</Text>
            <Feather
              onPress={increaseQuantity}
              name="plus-circle"
              size={24}
              color="gray"
            />
            <Text style={styles.itemTotal}>
              $ {cartItem.product.price * cartItem.quantity}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartListItem

const styles = StyleSheet.create({
    container:{
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    image:{
        width: '40%',
        aspectRatio: 1,
    },
    contentContainer:{
        flex: 1,
        marginLeft: 10
    },
    name:{
        fontWeight: '500',
        fontSize: 18
    },
    size:{
        fontSize: 16,
        color: 'gray'
    },
    footer:{
        marginTop: 'auto',
        flexDirection: 'row',
    },
    quantity:{
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'gray'
    },
    itemTotal: {
        fontSize: 16,
        marginLeft: 'auto',
        fontWeight: '500'
    }
})