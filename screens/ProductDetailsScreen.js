import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../slices/cartSlice';

const ProductDetailsScreen = () => {
    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();
    const {width, height} = useWindowDimensions();
    const [count, setCount] = useState(0);

    const addToCart = () =>{
      dispatch(cartSlice.actions.addCartItem({product}))
      setCount(count + 1)
    }
    
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#ededed", height }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={product.subImg}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              source={item}
              style={{ width, aspectRatio: 1 }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <ScrollView
          style={{ height: 500 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>
      </ScrollView>
      <TouchableOpacity onPress={addToCart} style={styles.button}>
        <View style={styles.ex}>
          <Text style={styles.buttonText}>Add to cart </Text>
          <Text style={styles.buttonText}>({count})</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  ex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 35,
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