import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CategoryMealsScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>The CategoryMealsScreen Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen;