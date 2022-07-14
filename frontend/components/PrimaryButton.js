import {View, Text, StyleSheet, Pressable} from "react-native";

export default function PrimaryButton({children}) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonInner} android_ripple={{color: "black"}} onPress={() => {
                console.log("pressed")
            }} >
                    <Text style={styles.buttonText}>{children}</Text>
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
        backgroundColor: "#EF8C6BFF",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: 50,
    }
});