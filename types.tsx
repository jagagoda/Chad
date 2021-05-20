/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    TabOne: undefined;
    TabTwo: undefined;
};

export type TabOneParamList = {
    TabOneScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};
export type ChatRoom = {
    id: String;
    users: User[];
    lastMessage: Message;
}
export type UserType = {
    email: String,
    id: String;
    firstName: String;
    profilePic: String;
    role: String;
}
export type Message = {
    id: String;
    content: string;
    createdAt: string;
    user: User[];
}
export type SingleUserType = {
    id: String,
    name: String,
    roomPic: String,
}
export type RoomType = {
    id: String,
    messages: Message[],
    name: String,
    roomPic: String,
    user: UserType,
}
export type Message = {
    body: String,
    id: String,
    insertedAt: String,
    user: UserType,
}
