import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const MealDetailScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>The MealDetailScreen </Text>
            <Button title='Go back to Categories' onPress={()=>{
                props.navigation.popToTop();
            }}/>
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

export default MealDetailScreen;