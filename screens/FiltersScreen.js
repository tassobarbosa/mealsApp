import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>The FiltersScreen Screen</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Filter Meals',
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

export default FiltersScreen;