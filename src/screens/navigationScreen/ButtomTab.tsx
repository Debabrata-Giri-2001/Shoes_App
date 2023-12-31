import {View} from 'react-native';
import React from 'react';
import { getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Shoes, Cart, Favorite} from '../screen/index';
import {Box, Text, Image, Heading} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../screen/Home';
import ProductDetails from '../../components/productDetailsScreen/ProductDetails';
import HomeMainPage from '../../components/homeComponents/HomeMainPage';

const Tab = createBottomTabNavigator();
// type DetailsProps = NativeStackScreenProps<RootStackPramList, 'ProductDetails'>;

const ButtomTab = ({navigation, route}: any) => {


  const getTabBarVisibility = (route: any) => {
    // console.log(route.name);
    
    if (route.name === 'Shoes') {
      return 'none';
    }
    return 'flex';
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: getTabBarVisibility(route),
          position: 'absolute',
          bottom: 25,
          left: '5%',
          right: '5%',
          elevation: 2,
          backgroundColor: '#1E1E1E',
          borderRadius: 15,
          height: 80,
          width: '90%',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeMainPage}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              rounded="lg"
              p="8px"
              ml={focused ? '24%' : '0%'}
              justifyContent={'space-between'}
              bgColor={focused ? '#ffffff' : '#1E1E1E'}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/20/20176.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#FFFFFF'}
              />

              <Text bold display={focused ? null : 'none'}>
                Home
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Shoes"
        component={Shoes}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              rounded="lg"
              p="8px"
              ml={focused ? '24%' : '0%'}
              justifyContent={'space-between'}
              bgColor={focused ? '#ffffff' : '#1E1E1E'}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/919/919275.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#FFFFFF'}
              />
              <Text bold display={focused ? null : 'none'}>
                Shoes
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              rounded="lg"
              p="8px"
              ml={focused ? '24%' : '0%'}
              justifyContent={'space-between'}
              bgColor={focused ? '#ffffff' : '#1E1E1E'}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2838/2838838.png',
                }}
                alt="shose_icon"
                size="28px"
                tintColor={focused ? '#1E1E1E' : '#FFFFFF'}
              />
              <Text bold display={focused ? null : 'none'}>
                Cart
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              rounded="lg"
              p="8px"
              ml={focused ? '-30%' : '0%'}
              justifyContent={'space-between'}
              bgColor={focused ? '#ffffff' : '#1E1E1E'}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/102/102279.png',
                }}
                alt="shose_icon"
                size="26px"
                tintColor={focused ? '#1E1E1E' : '#FFFFFF'}
              />
              <Text bold display={focused ? null : 'none'}>
                Wishlist
              </Text>
            </Box>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTab;
