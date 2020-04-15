import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const Card = props => {
    return(
        <View style={{ ...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};
const styles=StyleSheet.create({
    card:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        borderRadius:20,
        padding:20,
        shadowColor:'black',
        shadowOffset:{width:10,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white'
    }
});
export default Card;