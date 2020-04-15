import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Numbercontainer = props => {
    return (
    <View styles={styles.container}>
    <Text styles={styles.number}>{props.children}</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        color:'red',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color:'red',
        fontSize:22,
    }
   
});
export default Numbercontainer;