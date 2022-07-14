import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import birds from "./assets/birds.png";
import background from "./assets/background.png";
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {
    const [birdCount, setBirdCount] = useState("0");

    const birdCountInputHandler = (enteredText) => {
        //allow only numbers
        if (enteredText.match(/^\d*(\.\d+)?$/)) {
            setBirdCount(enteredText);
        }
    }

    const addBirdCountHandler = () => {
        console.log(birdCount);
    }

    return (
        <>
            <StatusBar style="light"/>
            <ImageBackground source={background} resizeMode="cover" style={styles.appContainer} imageStyle={{opacity: 0.8}}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>~BirdQuiz~</Text>
                </View>
                <View style={styles.gameContainer}>
                    <StartGameScreen/>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={birds}

                    />
                </View>
            </ImageBackground>
        </>
    )
        ;
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        padding: 20,
        color: "white"
    },
    gameContainer: {
        flex: 3,
    },
    textInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "white",
    },
    imageContainer: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    image: {
        width: 350,
        height: 260,
    },
});
