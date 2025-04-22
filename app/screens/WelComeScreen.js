import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../components/config/colors';


function WelComeScreen(props) {
    return (
        <ImageBackground style={styles.background}> 
        <View style={styles.container}>
            <Image source={require('../assets/favicon.png')} style={styles.image} />
            <Text style={styles.text}>Welcome to our App!</Text>
        </View>

        <View style={styles.registerbuttoncontainer}>
            <AppButton title='Register' onPress={() => console.log('Register')} />
        </View>
        <View style={styles.loginbuttonContainer}>
            <AppButton title='Login' onPress={() => console.log('Login')} /> 
                </View>   
        </ImageBackground>
    );
}

export default WelComeScreen;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        alignItems: 'center',
    top: 70,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    registerbuttoncontainer:{
        backgroundColor: colors.dark,
        borderRadius: 25,
        width:'95%',
        top: 200,
    },
    loginbuttonContainer:{
      width:'95%',
      top: 210
    }
});