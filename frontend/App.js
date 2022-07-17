import {useState} from "react";
import {StyleSheet, ImageBackground} from "react-native";
import MenuScreen from "./screens/MenuScreen";
import GameScreen from "./screens/GameScreen";
import background from "./assets/background.png";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
    const [isInGame, setIsInGame] = useState(false);

    const setGameOn = () => {
        setIsInGame(true);
    }

    let screen = <MenuScreen setStartGame={setGameOn}/>

    if (isInGame) {
        screen = <GameScreen/>
    }

    return (
        <SafeAreaView style={[styles.rootScreen, styles.statusBar]}>
            <ImageBackground source={background} resizeMode="cover" style={styles.rootScreen}>
                {screen}
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: "rgba(34, 78, 173, 0.9)",
        textDecorationColor: "white"
    }

});
