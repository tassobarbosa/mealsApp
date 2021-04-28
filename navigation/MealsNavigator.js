import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CateoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
});

export default createAppContainer(MealsNavigator);