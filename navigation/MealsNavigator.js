import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors';

import Icon from 'react-native-ionicons';


const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen
    },
    {    
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    
    }
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name='md-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    }}
},{
    tabBarOptions:{
        activeTintColor: Colors.secondaryColor
    }
});

export default createAppContainer(MealsFavTabNavigator);