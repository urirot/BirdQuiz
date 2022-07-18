import {StyleSheet, Text, View, Image} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import birds from "../assets/birds.png";


const MenuScreen = ({setStartGame}) => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>~BirdQuiz~</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onButtonClick={setStartGame} text={"Quiz Me!"}></PrimaryButton>
                <PrimaryButton text={"Statistics"}></PrimaryButton>
                <PrimaryButton text={"Settings"}></PrimaryButton>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={birds}

                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        padding: 20,
        color: "white"
    },
    buttonsContainer: {
        flex: 2,
        padding: 16,
        marginHorizontal: 24,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    imageContainer: {
        flex: 4,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    image: {
        width: 350,
        height: 260,
    },
});

export default MenuScreen;