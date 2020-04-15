import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const Gameoverscreen=props=>{
    return(
        <View>
            <Text>The Game is Over! </Text>
            <Text>Number of Rounds : {props.roundsnumber}</Text>
            <Text>Number was :{props.usernumber}</Text>
            <Button title="NEW GAME" onPress={props.restart}></Button>
        </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default Gameoverscreen;