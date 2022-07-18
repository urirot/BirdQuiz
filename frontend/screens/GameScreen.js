import {StyleSheet, Text, View, TextInput, Button} from "react-native"
import {useEffect, useState} from "react";
import _ from "lodash";
import CarouselWrapper from "../components/CarouselWrapper";


const images1 = [
    "https://storage.googleapis.com/bird_images_bird_quiz/Fulicaatra/images10.jpg",
    "https://storage.googleapis.com/bird_images_bird_quiz/Fulicaatra/images4.jpg",
    "https://storage.googleapis.com/bird_images_bird_quiz/Fulicaatra/images7.jpg",
]

const images2 = [
    "https://storage.googleapis.com/bird_images_bird_quiz/Anserfabalis/images10.jpg",
    "https://storage.googleapis.com/bird_images_bird_quiz/Anserfabalis/images4.jpg",
    "https://storage.googleapis.com/bird_images_bird_quiz/Anserfabalis/images7.jpg",
]

const images = [images1, images2];

const GameScreen = () => {
    const [round, setRound] = useState(0);
    const [birdImages, setBirdImages] = useState(null);

    const getImagesAPI = (round) => {
        return images[round];
    }

    const NUMBER_OF_ROUNDS = 2

    useEffect(() => {
        let birdImages = getImagesAPI(round);
        setBirdImages(birdImages);
    }, [round]);

    return (
        round < NUMBER_OF_ROUNDS ?
            <View style={styles.rootContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Round {round + 1}
                    </Text>
                </View>

                <View style={styles.gameContainer}>
                    {birdImages !== null ?
                        <>
                            <View style={styles.carouselContainer}>
                                <CarouselWrapper images={birdImages}/>
                            </View>
                            <View style={styles.actionsContainer}>
                                <View style={styles.inputContainer}>
                                    <TextInput style={{backgroundColor: "white"}}/>
                                </View>
                                <View style={styles.buttonsContainer}>
                                    <Button title={"Enter"}></Button>
                                    <Button title={"Skip"}></Button>
                                </View>
                            </View>

                        </>
                        : <Text>Loading...</Text>}
                </View>
            </View> :
            <View style={styles.titleContainer}>
                <Text>Game Over</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 50,
    },
    titleContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        padding: 20,
        color: "white",
    },
    gameContainer: {
        flex: 5,
        justifyContent: "flex-start",
        minHeight: 200
    },
    carouselContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 4
    },
    actionsContainer: {
        backgroundColor: "rgba(0,0,0, 0.5a)",
        flex: 1,
        padding: 20
    },
    buttonsContainer: {
        paddingHorizontal: 50,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        flex: 2
    },
    inputContainer: {
        flex: 2
    }
});

export default GameScreen;


