import React from "react"
import {View, Image, Text} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";
import moment from "moment";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
    )
};

export default ChatListItem;
