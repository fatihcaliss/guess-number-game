import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";


function generateRandomBetweem(min, max, exclude) {
    const rndNum = Math.floor(Marth.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetweem(min, max, exclude);
    } else {
        return rndNum;
    }
}
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetweem(1, 100, userNumber)
    const [ currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            <View>
                <Text>
                    LOG ROUNDS
                </Text>
            </View>

        </View>

    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})