import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props =>{

    const favMeals = MEALS.filter(meal => meal.id==='m1' || meal.id==='m2')

    return(
        <MealList listData = {favMeals} navigation={props.navigation}/>
    );
}

FavoritesScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Your Favorites',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='menu' onPress = {()=>{navData.navigation.toggleDrawer()}} />
            </HeaderButtons>   
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen;