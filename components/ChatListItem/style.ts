import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        textAlign: 'left',
        flexDirection: 'row'
    },
    midContainer: {
        width: '50%',
        justifyContent: 'space-around',
    },
avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.light.tint,
},
    username: {
       fontWeight: 'bold',
       fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
    },
    time: {
        fontSize: 12,
    }
});

export default styles;
