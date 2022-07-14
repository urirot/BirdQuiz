import {StyleSheet, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGameScreen() {
    return (
        <View style={styles.container}>
            <PrimaryButton>Quiz Me!</PrimaryButton>
            <PrimaryButton>Knowledge Analysis</PrimaryButton>
            <PrimaryButton>Settings</PrimaryButton>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 24,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 220
    },
});