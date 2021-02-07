import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Payment, PaymentAdd, PaymentChange, PaymentFilter} from '../pages'
const Stack = createStackNavigator();

const Router =()=>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Payment"
                component={Payment}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PaymentAdd"
                component={PaymentAdd}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PaymentChange"
                component={PaymentChange}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PaymentFilter"
                component={PaymentFilter}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router;