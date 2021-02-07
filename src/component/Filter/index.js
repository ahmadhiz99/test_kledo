import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
// import {colors} from '../../utils'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import {setForm} from '../../redux'
import {useSelector, useDispatch} from 'react-redux'

const Filter =({screen})=>{
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const filter =()=>{
        dispatch(setForm('name', ''));
        navigation.navigate('PaymentFilter');
    }
    return(
        <TouchableOpacity style={styles.button} onPress={filter}>
            <Icon name="filter" size={24} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        marginRight:20
    }
})
export default Filter;