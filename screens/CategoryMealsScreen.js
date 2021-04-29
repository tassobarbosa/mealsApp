import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props =>{

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return(
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Text>The CategoryMealsScreen Screen</Text>
            <Button title='Go to meals' onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'});
            }} />
            <Button title = 'Go back' onPress={()=>{
                props.navigation.goBack();
            }} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen;