import React from 'react';
import {useState} from 'react';
import {View,Text, 
     StyleSheet, 
     Button, 
     TouchableWithoutFeedback,
     Keyboard,
     Alert} from 'react-native';
import Input from '../components/input';
import Card from '../components/card';
import Numbercontainer from '../components/NumberContainer';

const Startgamescreen = props => {
    const [enteredvalue,setenteredvalue]=useState('');
    const [confirmed,setconfirmed]=useState(false);
    const [selectednumber,setselectednumber]=useState();

    const NumberInputHandler = inputText => {
        setenteredvalue(inputText.replace(/[^0-9]/g,''));
    };

    const ResetInputHandler = () => {
        setenteredvalue('');
        setconfirmed(false);
    };

    const ConfirmInputHandler = () => {
        const chosennumber=parseInt(enteredvalue);
        if(isNaN(chosennumber)||chosennumber<=0||chosennumber>99){
            Alert.alert('Invalid Number!',
            ' Number has to between 1-99.',
            [{text:'Okay',style:'destructive',onpress:ResetInputHandler }]);
           return;
        };
        setconfirmed(true);
        setselectednumber(chosennumber);
        setenteredvalue('');
    };

    let confirmedoutput;
    if(confirmed){
        confirmedoutput = 
        <Card style={styles.summarycontainer}> 
        <Text>You Selected :</Text>
       <Numbercontainer>{selectednumber}</Numbercontainer>
       <Button title="START GAME" onPress={()=>props.onStartGame(selectednumber)}/>
        </Card>
    };
    return(
        <TouchableWithoutFeedback onpress={ () => {
            Keyboard.dismiss();
        }
    }>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputcontainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                     maxLength={2} 
                     keyboardType="number-pad"
                     onChangeText={NumberInputHandler}
                     value={enteredvalue}/>
                    <View style={styles.buttoncontainer}>
                        <Button title="RESET" onPress={ResetInputHandler}/>
                        <Button title="CONFIRM" onPress={ConfirmInputHandler}/>
                    </View>
                </Card>
                {confirmedoutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputcontainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        borderRadius:20,
        padding:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        shadowColor:'black',
        shadowOffset:{width:10,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white'
    },
    buttoncontainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    input:{
        width:50,
        textAlign:'center',
    },
    summarycontainer:{
        marginTop:20,
        alignItems:'center'
    }
}
);
export default Startgamescreen;