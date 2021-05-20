import React from 'react';
import {View, Text, FlatList} from "react-native";
import {useRoute} from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import Inputbox from "../components/InputBox";

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <View>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) =>
                    <ChatMessage message={item}
                                 inverted
                    />}
            />
            <Inputbox/>
        </View>
    );
};

export default ChatRoomScreen;
