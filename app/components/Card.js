import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from './config/colors';

function Card({ image,  price,  location, numberOfPeolePerRoom, distanceToCampus}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{price}</Text>
            <Text style={styles.description}>{location}</Text>
            <Text style={styles.description}>{numberOfPeolePerRoom}</Text>
            <Text style={styles.description}>{distanceToCampus}</Text>
        </View>
    );
   
}
export default Card;
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 20,
    overflow: "hidden",
  },
  description: {
    padding: 5,
    fontWeight: "bold",
    color: colors.medium,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 7,
  },
});

