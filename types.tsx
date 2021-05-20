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
  users: [User];
  lastMessage: Message;
}
export type User = {
  id: String;
  name: String;
  imageUri: String;
}
export type Message = {
  id: String;
  content: string;
  createdAt: string;
}
