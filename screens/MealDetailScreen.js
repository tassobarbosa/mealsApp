import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {MEALS} from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = props =>{

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title='Go back to Categories' onPress={()=>{
                props.navigation.popToTop();
            }}/>
        </View>
    );    
}

MealDetailScreen.navigationOptions = (navigationData) =>{
    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return{
        headerTitle: selectedMeal.title,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>            
                <Item 
                    title='FAV'
                    iconName="star"
                    onPress={()=>{
                        console.log('Mark as favorite!')
                    }}
                />
            </HeaderButtons>        
    };
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailScreen;