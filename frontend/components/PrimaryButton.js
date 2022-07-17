import {View, Text, StyleSheet, Pressable} from "react-native";

const PrimaryButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonInner} android_ripple={{color: "black"}} onPress={props.onPress}>
                    <Text style={styles.buttonText}>{props.text}</Text>
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
        backgroundColor: "#FD805AFF",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: 50,
    }
});

export default PrimaryButton;