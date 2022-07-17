import {Image, StyleSheet, Text, View} from "react-native"
import {useCallback, useEffect, useRef, useState} from "react";
import _ from "lodash";

import Carousel from 'react-native-snap-carousel';

const images1 = [
    require("../assets/dummy-data/Fulicaatra/images4.jpg"),
    require("../assets/dummy-data/Fulicaatra/images7.jpg"),
    require("../assets/dummy-data/Fulicaatra/images10.jpg"),
]

const images2 = [
    require("../assets/dummy-data/Anserfabalis/images4.jpg"),
    require("../assets/dummy-data/Anserfabalis/images7.jpg"),
    require("../assets/dummy-data/Anserfabalis/images10.jpg"),
]

const images = [images1, images2];

const GameScreen = () => {
    const [round, setRound] = useState(0);
    const [birdImages, setBirdImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);

    const getImagesAPI = (round) => {
        return images[round];
    }

    const NUMBER_OF_ROUNDS = 2

    useEffect(() => {
        let birdImages = getImagesAPI(round);
        setBirdImages(birdImages);
    }, [round]);


    const renderItem = useCallback(({item, index}) => {
        return (
            <View>
                <Image
                    source={item}
                    style={styles.image}
                />
            </View>
        );
    }, []);

    return (
        <View style={styles.screen}>
            {round < NUMBER_OF_ROUNDS ?
                <>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Round {round + 1}
                        </Text>
                    </View>

                    {birdImages !== null ?
                        <View style={styles.carouselContainer}>
                            <Carousel
                                layout={"default"}
                                ref={ref}
                                data={birdImages}
                                sliderWidth={300}
                                itemWidth={300}
                                renderItem={renderItem}
                                onSnapToItem={(index) => setActiveIndex(index)}
                            />
                        </View>
                        : <Text>Loading...</Text>}
                </> :

                <Text>Game Over</Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        padding: 20,
        color: "white",
    },
    image: {
        width: null,
        height: 200,
        borderRadius: 5,
    },
    carouselContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default GameScreen;


