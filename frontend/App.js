import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import birds from './assets/birds.png';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome to ~BirdQuiz~</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={"Bird Count"}/>
                <Button title={"Go!"}/>
            </View>
            <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={birds}

            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16
    },
    headerContainer: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    textInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 8,
        padding: 8
    },
    imageContainer: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 303,
        height: 210,
    },
});
