import { Pressable,Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store'
import { Provider } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import {FontAwesome5} from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={HomeScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={({ navigation }) => ({
              headerShown: true,
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate("Shopping Cart")}
                  style={{ flexDirection: "row" }}
                >
                  <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                  <Text style={{ marginLeft: 5, fontWeight: "500" }}>Cart</Text>
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Product Details"
            component={ProductDetailsScreen}
            options={{ headerShown: true, presentation: "modal" }}
          />
          <Stack.Screen
            name="Shopping Cart"
            component={ShoppingCart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirmation"
            component={ConfirmationScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}








//can add screenOptions = {{contentStyle: {backgroundColor: 'white'}}} can add to Stack.Navigator