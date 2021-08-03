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

export type TabOneParamList = {
  TabOneScreen: undefined;
  screenOptions: any;
  tabBarIcon: any;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  screenOptions: any;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};
