import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DiscoverScreen from '../screens/Discover'
import ProductListScreen from '../screens/ProductList'
import ProductDetailScreen from '../screens/ProductDetail'

import ShopScreen from '../screens/Shop'
import WishListScreen from '../screens/WishList'
import BagScreen from '../screens/Bag'
import AccountScreen from '../screens/Account'

const ContainerStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function DiscoverStackScreen() {
    return (
      <DiscoverStack.Navigator>
        <DiscoverStack.Screen name="DiscoverScreen" component={DiscoverScreen} options={{
          headerRight: () => <Text>aaaa</Text>,
          headerLeft: () => <Text>leftttttt</Text>
        }} />
        <DiscoverStack.Screen name="ProductListScreen" component={ProductListScreen} component={DiscoverScreen} options={{
          headerRight: () => <Text>rigggggghht</Text>,
          headerLeft: () => <Text>leftttttt</Text>,
          headerBackVisible: true,
        }} />
        <DiscoverStack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      </DiscoverStack.Navigator>
    );
  }

  const TabApp = () => {
    return (
      <Tab.Navigator
        initialRouteName='Discover'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused
                ? 'alarm'
                : 'alarm-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'WishList') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Discover" component={DiscoverStackScreen} options={{ title: 'Discover' }} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="WishList" component={WishListScreen} />
        <Tab.Screen name="Bag" component={BagScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <ContainerStack.Navigator screenOptions={{ headerShown: false }}>
        <ContainerStack.Screen name="DiscoverScreen" component={TabApp} />
        <ContainerStack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      </ContainerStack.Navigator>
    </NavigationContainer>
  )
}
