import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 68,
        backgroundColor: Colors.light.tint,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    mainContainer: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        margin: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 12,
    },
    input: {
        width: 287,
        padding: 10,
        fontSize: 16,

    }

})
export default styles
