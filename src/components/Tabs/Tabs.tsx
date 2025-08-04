import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AllTasksIcon from '../../assets/icons/AllTasksIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import TasksIcon from '../../assets/icons/TasksIcon';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { TabsStackParamList } from '../../interfaces/navigation/routeParams';
import CommonTasksScreen from '../../screens/CommonTasksScreen/CommonTasksScreen';
import CurrentUserScreen from '../../screens/CurrentUserScreen/CurrentUserScreen';
import TasksScreen from '../../screens/TasksScreen/TasksScreen';
import TabBarIcon from '../TabBarIcon/TabBarIcon';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Tabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <TabsStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: insets.bottom + 70,
          paddingBottom: insets.bottom,
          paddingTop: 15,
        },
      }}
    >
      <TabsStack.Screen
        name={ERouteNames.TASKS_SCREEN}
        component={TasksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} Icon={TasksIcon} />
          ),
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.CURRENT_USER}
        component={CurrentUserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} Icon={ProfileIcon} />
          ),
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.COMMON_TASKS_SCREEN}
        component={CommonTasksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} Icon={AllTasksIcon} />
          ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
