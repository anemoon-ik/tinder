import { View, Text, Button, ImageBackground, TouchableOpacity, useLayoutEffect, StyleSheet } from 'react-native'
import React from 'react'
import useAuth, { AuthProvider } from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
import { whitespace } from 'tailwind-rn/unsupported-core-plugins';

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation();
  const tailwind = useTailwind();
  const image = { uri: "https://i.pinimg.com/originals/76/b0/ed/76b0ed6295d2a90999bd237083d00239.jpg" };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity style={styles.opacity} onPress={signInWithGoogle}>
          <Text style={styles.text}>login to fall in love with your solitude</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  //   return (
  //     <View style={tailwind("flex-1")}>
  //       <ImageBackground
  //         resizeMode="cover"
  //         style={tailwind("flex-1")}
  //         source={{ uri: "https://i.pinimg.com/originals/76/b0/ed/76b0ed6295d2a90999bd237083d00239.jpg" }}
  //       >
  //         <TouchableOpacity style={[
  //           tailwind("absolute bottom-40 w-52 bg-white rounded-2xl"), 
  //           { marginHorizontal: "25%" }
  //           ]} 
  //           onPress={signInWithGoogle}
  //           >
  //           <Text style={tailwind("font-semibold text-center")}>
  //             Fall in love with your solitude
  //           </Text>
  //         </TouchableOpacity>
  //       </ImageBackground>
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  // opacity: {
  //   position: 'absolute',
  //   left: 50,
  //   backgroundColor: '#000000a0',
  //   borderRadius: 60,
  // },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});


export default LoginScreen;