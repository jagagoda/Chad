import React from "react";
import {Text} from 'react-native';
import {Message} from '../../types';
import moment from "moment";
import {View} from 'react-native';
import styles from "./style";


export type ChatMessageProps = {
    message: Message,
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props;
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#993AFC' : "white",
                    marginLeft: isMyMessage() ? 70 : 30,
                    marginRight: isMyMessage() ? 10 : 50,
                    borderBottomRightRadius: isMyMessage() ? 0 : 12,
                    borderBottomLeftRadius: isMyMessage() ? 12 : 0,
                }
            ]}>
                <Text style={[
                    styles.message, {
                        color: isMyMessage() ? "white" : "black",
                        padding: 10,
                    }
                ]}>{message.content}</Text>
                <Text style={[
                    styles.time, {
                        color: isMyMessage() ? "white" : "black",
                        fontSize: 12,
                    }
                ]}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
};
export default ChatMessage;
