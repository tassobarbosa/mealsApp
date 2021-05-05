import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

const CategoryGridTile = props => {
    return(
        <View style={styles.gridItems} >
            <TouchableNativeFeedback 
                style={{flex: 1}}
                onPress={props.onSelect}>
                <View style={{...styles.container,...{backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItems:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    container:{
        flex: 1,        
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22
    }
});

export default CategoryGridTile;