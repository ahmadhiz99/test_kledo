import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../../utils'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

const BackButton =({screen})=>{
    const navigation = useNavigation();

    const go =()=>{
        navigation.goBack()
    }
    return(
        <TouchableOpacity style={styles.button} onPress={go}>
            <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginRight:20
    }
})
export default BackButton;