import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetweem(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetweem(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber,onGameOver }) {
    const initialGuess = generateRandomBetweem(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess,userNumber,onGameOver])


    function nextGuesHandler(direction) {
        if ((direction === "lower" && currentGuess < userNumber) || (direction === "grater" && currentGuess > userNumber)) {
            Alert.alert("Dont't lie!", 'You know that this is wrong...', [{ text: "Sorry!", style: "Cancel" }])
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetweem(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, "lower")} >-</PrimaryButton>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, "greater")}>+</PrimaryButton>
                </View>

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