import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textCont}>
        <Text style={styles.textTop}>Slick Shirts</Text>
        <Text style={styles.slogan}>Styles Unmatched </Text>
      </View>
      <View style={styles.textCont}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={styles.text}>Browse Selection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    slogan:{
        top: 195,
        fontWeight: '200',
        fontSize: 20,
        textAlign: 'center',
    },
    textCont:{
        height: '50%'
    },
    textTop:{
        top: 175,
        fontWeight: '200',
        fontSize: 55,
        letterSpacing: 10
      
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'black',
        width: 250,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
        textAlign: 'center'
    }
})