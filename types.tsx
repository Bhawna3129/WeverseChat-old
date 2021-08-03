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
  TabThree: undefined;
  TabFour: undefined;
  Friends: undefined;
  Chat: undefined;
  Explore: undefined;
  Settings: undefined;
};

export type FriendScreenParamList = {
  FriendScreen: undefined;
  screenOptions: any;
  tabBarIcon: any;
};

export type ChatScreenParamList = {
  ChatScreen: undefined;
  screenOptions: any;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  messageRead: false;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
