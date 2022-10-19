import React from 'react';
import { StyleSheet, View, Animated, Text, Platform, Image } from 'react-native';

import Boyeong from './assets/boyeong.jpg';
import Haneul from './assets/haneul.jpg';
import Jimin from './assets/Jimin.jpg';
import Jooah from './assets/jooah.jpg';
import Minho from './assets/minho.jpg';
import Mokjin from './assets/mokjin.jpg'
import useTinderCard from './screens/tinderCard';
import StackNavigator from "./StackNavigator";
import {NavigationContainer} from "@react-navigation/native"
import { AuthProvider } from "./hooks/useAuth";

function App() {
  const [data, _panResponder, animation, scale, opacity] = useTinderCard([
    {
      image: Boyeong,
      id: 1,
      name: "Boyeong",
      gender: 'male',
    },
    {
      image: Haneul,
      id: 2,
      name: "Haneul",
      gender: 'male',
    },
    {
      image: Jimin,
      id: 3,
      name: "Jimin",
      gender: 'female',
    },
    {
      image: Jooah,
      id: 4,
      name: "Jooah",
      gender: 'female'
    },
    {
      image: Minho,
      id: 5,
      name: "Minho",
      gender: 'male'
    },
    {
      image: Mokjin,
      id: 6,
      name: "Mokjin",
      gender: 'female'
    },
  ]);
  return (
    <View style={styles.container}>
      {data
        .slice(0, 2)
        .reverse()
        .map((item, index, items) => {
          const isLastItem = index === items.length - 1;
          const panHandlers = isLastItem ? { ..._panResponder.panHandlers } : {};
          const isSecondToLast = index === items.length - 2;
          const rotate = animation.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ['-30deg', '0deg', '30deg'],
            extrapolate: 'clamp',
          });

          const animatedCardStyles = {
            transform: [{ rotate }, ...animation.getTranslateTransform()],
            opacity,
          };

          const cardStyle = isLastItem ? animatedCardStyles : undefined;
          const nextStyle = isSecondToLast
            ? { transform: [{ scale: scale }], borderRadius: 5 }
            : undefined;

          return (
            <Animated.View
              {...panHandlers}
              style={[styles.card, cardStyle, nextStyle]}
              key={item.id}>
              <View style ={styles.imageContainer}>
                <Image resizeMode="cover" source={item.image} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.animalText}>{item.animal}</Text>
              </View>
            </Animated.View>
          );
        })}
    </View>
  );
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    height: 300,
    backgroundColor: '#f4f4f4',
    position: 'absolute',
    borderRadius: 10,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
    borderWidth: 1,
    borderColor: '#FFF',
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    padding: 10
  },
  nameText: {
    fontSize: 16,
  },
  animalText: {
    fontSize: 14,
    color: '#757575',
    paddingTop: 5
  }
  
});

export default App;
