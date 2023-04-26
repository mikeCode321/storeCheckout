import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { shirtSlice } from "../slices/shirtSlice";
import { selectProducts } from "../slices/shirtSlice";

const ProductsScreen = () => {
  const navigation = useNavigation();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.subHeading}>Shirts</Text>
      </View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        data={products}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              dispatch(shirtSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("Product Details");
            }}
            style={styles.itemContainer}
          >
            <Image style={styles.image} source={item.mainImg} key={index} />
          </Pressable>
        )}
        numColumns={2}
      />
      <View>
        <Text style={styles.freeShipping}>
          Qualify for free shipping with orders over 200 dollars
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 50,
    fontWeight: '200',
    top: 50
  },
  freeShipping:{
    fontWeight: '600',
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ededed",
  },
  image: {
    alignSelf:'center',
    width: 175,
    height: 150,
    marginBottom: 10,
    borderRadius: 20,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
