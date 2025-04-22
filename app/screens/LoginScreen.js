import React from 'react';
import Card from '../components/Card';
import { StyleSheet, View } from 'react-native';

function LoginScreen(props){
    return(
    
        <Card style={StyleSheet.card}
        image={require('../assets/favicon.png')}
        price='1000'
        location='Hà Nội'
        numberOfPeolePerRoom='2'
        distanceToCampus='2km'
        />
        
    )
}

export default LoginScreen;
