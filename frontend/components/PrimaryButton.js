import {View, Text, StyleSheet, Pressable} from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({text, onButtonClick}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonInner} android_ripple={{color: "black"}} onPress={onButtonClick}>
                    <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 28,
        margin: 4,
        elevation: 5,
        overflow: "hidden",
    },
    buttonText: {
        fontWeight: "bold",
    },
    buttonInner: {
        backgroundColor: Colors.primary,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: 50,
    }
});

export default PrimaryButton;