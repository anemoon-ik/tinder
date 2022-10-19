import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import { useTailwind } from 'tailwind-rn/dist';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
// import Swiper from "@react-native-deck-swiper";




const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const { signInWithGoogle } = useAuth();
  const tw = useTailwind();


  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, [])
  return (
    <SafeAreaView style={tw("flex-1")}>
      {/* Header */}
      <View style={tw("flex-row items-center justify-between px-5")}>
        {/* <TouchableOpacity onPress={logout}> */}
            {/* <Image style={tw('h-10 w-19 rounded-full')} source={{uri: user.PhotoURL}}/> */}
            {/* <Text>Logout</Text>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>

          <Text>This is HomeScreen</Text>

        {/* <TouchableOpacity>
          </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>

      </View>



      {/* end of the header */}
      {/* <Button title="login" onPress={() => navigation.navigate('Login')} /> */}

      {/* <View style={tw("flex-1 -mt-6")}>
        <Swiper 
        containerStyle={{backgroundColor: "transperant"}}
        cards={DATA}
        renderCard={(card) => (
          <View key={card.id} style={tw("bg-white h-3/4 rounded-xl")}>
            <Tex>{card.firstName}</Tex>
          </View>
    )}
        
        />
          
        </View> */}

    </SafeAreaView>
  );
};

export default HomeScreen;