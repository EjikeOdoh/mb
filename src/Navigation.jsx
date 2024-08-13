import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import Service from './screens/services/Service';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './screens/settings/Settings';
import Profile from './screens/home/Profile';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors, tinyText} from './utils/styles';
import ChatScreen from './screens/chat/ChatScreen';
import Details from './screens/services/Details';
import Process from './screens/services/Process';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const MainScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tarBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: tinyText,
        tabBarStyle: {
          height: verticalScale(70),
          borderTopColor: 'transparent',
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          paddingBottom: moderateScale(5),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MIcon
                name="home-variant"
                size={scale(30)}
                color={colors.primary}
              />
            ) : (
              <MIcon
                name="home-variant-outline"
                size={scale(30)}
                color={colors.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarVisible: false,
          tabBarButton: props => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarVisible: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: props => null,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MIcon name="chat" size={scale(30)} color={colors.primary} />
            ) : (
              <MIcon name="chat-outline" size={scale(30)} color={colors.gray} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MIcon name="cog" size={scale(30)} color={colors.primary} />
            ) : (
              <MIcon name="cog-outline" size={scale(30)} color={colors.gray} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarVisible: false,
          tabBarButton: props => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tab.Screen
        name="Process"
        component={Process}
        options={{
          tabBarVisible: false,
          tabBarButton: props => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthScreens} />
      <Stack.Screen name="Main" component={MainScreens} />
    </Stack.Navigator>
  );
};

export default Navigation;
