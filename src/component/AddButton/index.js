import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../../utils'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const AddButton =({screen})=>{
    const navigation = useNavigation();

    const go =()=>{
        navigation.navigate('PaymentAdd')
    }

    return(
        <TouchableOpacity style={styles.button} onPress={go}>
            <Ionicons name="ios-add-circle" size={60} style={styles.icon} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        marginRight:20
    },
    icon:{
        color:colors.primary,
    }
})
export default AddButton;