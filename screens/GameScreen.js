import React, { useState ,useRef,useEffect} from 'react';
import {Text,View,StyleSheet,Button, Alert} from 'react-native';
import Numbercontainer from '../components/NumberContainer';
import Card from '../components/card';

const generateRandomBetween = (min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=(Math.floor(Math.random()*(max-min))+min);
    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }
};
const GameScreen = props => {
    const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userChoice));
    const [rounds,setrounds]=useState(0);
    const currentlow=useRef(1);
    const currenthigh=useRef(100);
    
    const {userChoice,ongameover}=props;
    //this function is rendered every time we will press lower or greater
    useEffect(()=>{
      if(currentGuess===props.userChoice){
          ongameover(rounds);
      }
    },[currentGuess,userChoice,ongameover]);

    const nextguesshandler = direction => {
        if((direction==='lower' && currentGuess<props.userChoice )|| (direction==='greater' && currentGuess>props.userChoice))
        {
            Alert.alert('Don\'t lie!',
            'you know that this is wrong...',[
            {text: 'Sorry!',style:'cancel'}
            ]);
            return;
        }
        if(direction==='lower'){
            currenthigh.current=currentGuess;
        }
        else{
            currentlow.current=currentGuess;
        }
        const nextNumber=generateRandomBetween(currentlow.current,currenthigh.current,currentGuess );
        setCurrentGuess(nextNumber);
        setrounds(currounds=>currounds+1);
    }
    
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{currentGuess}</Numbercontainer>
            <Card style={styles.buttoncontainer}>
                <Button title="LOWER" onPress={nextguesshandler.bind(this,'lower')}/>
                <Button title="GREATER" onPress={nextguesshandler.bind(this,'greater')}/>
            </Card>
            <Button title="EXIT GAME" onPress={props.onrestart}/>
        </View>
    )
};

const styles=StyleSheet.create({
 screen:{
     flex:1,
     padding:10,
     alignItems:'center'
 },
 buttoncontainer:{
     flexDirection:'row',
     justifyContent:'space-around',
     marginTop:20,
     width:300,
     maxWidth:'80%'
 }
});

export default GameScreen;