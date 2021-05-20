import React, {useState} from 'react';
import {Text, View} from "../Themed";
import Send from '../../assets/images/send.svg';
import {TextInput, TouchableOpacity} from "react-native";
import styles from "../InputBox/style";

const Inputbox = () => {
    const [message, setMessage] = useState('');
const onSendPress = () => {
console.log("pressed");
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextInput
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity onPress={onSendPress}>
                    <Send/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Inputbox;
