import React from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/screens';
import colors from '../components/config/colors';



const listings = [
  {
    id: 1,
    nunmberOfPeolePerRoom: 2,
    distanceToCampus: "2km",
    location: "NILE",
    price: 100,
    image: require("../assets/androidparty (1).png"),
  },
    {
        id: 2,
        nunmberOfPeolePerRoom: 3,
        distanceToCampus: "3km",
        location: "Chipata Compound",
        price: 200,
        image: require("../assets/androidparty (1).png"),
    },
    {
        id: 3,
        nunmberOfPeolePerRoom: 4,
        distanceToCampus: "4km",
        location: " Ngozi Street",
        price: 300,
        image: require("../assets/favicon.png"),
    },
    {
        id: 4,
        nunmberOfPeolePerRoom: 5,
        distanceToCampus: "5km",
        location: "Musonda Street",
        price: 400,
        image: require("../assets/adaptive-icon.png"),
    },
    {
        id: 5,
        nunmberOfPeolePerRoom: 6,
        distanceToCampus: "6km",
        location: "Parklands",  
        price: 500,
        image: require("../assets/splash-icon.png"),
    },
    {
        id: 6,
        nunmberOfPeolePerRoom: 7,
        distanceToCampus: "7km",
        location: "Luansha",
        price: 600,
        image: require("../assets/favicon.png"),
    },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
     ItemSeparatorComponent={
         <View style={{ width: "100%", height: 1, backgroundColor: colors.danger}} />
           }
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            price={" Rent per Month K" + item.price}
            numberOfPeolePerRoom={"Number of People per Room: " + item.nunmberOfPeolePerRoom}
            distanceToCampus={"Distance to Campus: " + item.distanceToCampus}
            location={"Location: " + item.location}
           // onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;