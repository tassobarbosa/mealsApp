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


const defaultStackNavOptions = {     
    headerStyle:{
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerTitle: 'A screen'             
}

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
        defaultNavigationOptions: defaultStackNavOptions
    
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {    
        defaultNavigationOptions: defaultStackNavOptions

}
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name='md-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorites: {screen: FavNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    }}
},{
    tabBarOptions:{
        activeTintColor: Colors.secondaryColor,
        inactiveTintColor: 'white',
        inactiveBackgroundColor: Colors.primaryColor,
        activeBackgroundColor: Colors.primaryColor
    }
});

export default createAppContainer(MealsFavTabNavigator);