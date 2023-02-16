import { View,StyleSheet} from "react-native"
import Colors from "../../constants/colors"

function Card({children}){
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //it is for just android shadow property
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})