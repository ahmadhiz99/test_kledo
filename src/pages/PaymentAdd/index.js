import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput
  } from 'react-native';
  import {TouchableOpacity} from 'react-native-gesture-handler'
import {useSelector,useDispatch} from 'react-redux'
import Axios from 'axios'

import {colors} from '../../utils'
import {setForm} from '../../redux'
import Header from './Header.js'

const PaymentAdd =({navigation})=>{
    const {form} = useSelector(state=>state.LoginReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        // getData();
    }, []);

    const submit=()=>{
        const data={
            name:form.name
        }
        console.log('data before send', data);
        Axios.post('https://api.jokolodang.com/api/v1/payments', data)
        .then(res=>{
            console.log('res : ', res);
            dispatch(setForm('name', ''));
        })
    }

    const getData=()=>{
        Axios.get('https://api.jokolodang.com/api/v1/payments')
        .then(res => {
            console.log('res: ', res),
            dispatch(setList('List', res));
        })
    }

    const sendData =()=>{
        console.log('data yang akan dikirim', form)
    }

    const onInputChange = (value, inputType)=>{
        dispatch(setForm(inputType, value));
    }

    return (
        <View style={{height:'100%'}}>

            <Header title='Tambah Pembayaran' screen='screen' style={{flex:1}}/>
            <View style={styles.content}>
                <Text>Nama</Text>
                <TextInput placeholder='Misal: Mandiri' style={styles.input} value={form.name} onChangeText={value=> onInputChange(value, 'name')} />
            </View>
            <View style={styles.saveButton}>
                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.text}>Simpan</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        padding:10
    },
    input:{
        borderColor:'silver',
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        paddingHorizontal:10
    },
    saveButton:{
        flex:2,
        // height:Dimensions.get('window').height,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom:10
    },
    button:{
        backgroundColor:colors.primary,
        marginBottom:10, 
        marginRight:10,
        padding:10,
        borderRadius:10,
        width:100,
        alignItems:'center'
    },
    text:{
        color:colors.secondary
    }
})
export default PaymentAdd