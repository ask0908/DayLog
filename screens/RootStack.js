import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainTab"
                component={MainTab}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Write" component={WriteScreen} />
        </Stack.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default RootStack;
