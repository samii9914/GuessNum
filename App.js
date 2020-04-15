import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Startgamescreen from './screens/startgamescreen';
import GameScreen from './screens/GameScreen';
import Gameoverscreen from './screens/gameover';

export default function App() {
  const [usernumber,setusernumber]=useState();
  const [guessrounds,setguessrounds]=useState(0);
  
  const confignewgamehandler=()=>{
    setguessrounds(0);
    setusernumber(null);

  };
  
  const startgamehandler = (selectednumber) => {
    setusernumber(selectednumber);
    setguessrounds(0);
  };

  const gameOverHandler=numofrounds=>{
    setguessrounds(numofrounds);
  };
  let content=<Startgamescreen onStartGame={startgamehandler}/>
  if(usernumber&&guessrounds<=0){
    content=<GameScreen userChoice={usernumber} ongameover={gameOverHandler} onrestart={confignewgamehandler}/>
    }
    else if(guessrounds>0)
    {
      content=<Gameoverscreen roundsnumber={guessrounds}  usernumber={usernumber} restart={confignewgamehandler}/>
    }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});

