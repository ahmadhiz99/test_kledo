import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
  } from 'react-native';
import {TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler'
import {useSelector,useDispatch} from 'react-redux'
import Axios from 'axios'
import Header from './Header.js'
import AddButton from '../../component/AddButton'
import {setForm,setList} from '../../redux'
import { colors } from '../../utils/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';

const Payment =({navigation})=>{
    const {form} = useSelector(state=>state.LoginReducer)
    const {list} = useSelector(state=>state.ListReducer)
    // const {getUsersList} = useSelector(state=>state.ListReducer)
    const dispatch = useDispatch();

    const [payments,setPayments] = useState([]);

    useEffect(()=>{
        getData();
    }, []);

    const getData=()=>{
        Axios.get('https://api.jokolodang.com/api/v1/payments')
        .then(res => {
            setPayments(res.data.data);
            dispatch(setList('list', res));
        })
    }

   
    return (
        <View style={{height:'100%'}}>

            <Header title='Pembayaran' screen='screen' style={{flex:1}}/>

            <View style={styles.content}>
                {payments.map(payment=>{
                    return( <Item key={payment.id} id={payment.id} name={payment.name} /> )
                })}
            </View>


            <View style={styles.addButton}>
                <AddButton screen='PaymentAdd' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginVertical:10
    },
    addButton:{
        flex:2,
        // height:Dimensions.get('window').height,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom:10
    },
    list:{
        marginHorizontal:10,
        marginVertical:10,
        color:colors.primary,
        fontSize:15,
    },
    line:{
        borderWidth:0.5,
        borderColor:'silver'
    },
    itemList:{
        flexDirection:'row',
        alignItems:'center',
    },
    textContainer:{
        alignSelf:'center', 
        position:'absolute' 
    },
    iconContainer:{
        flex:1, 
        alignItems:'flex-end'
    },
    icon:{
        color:'black'
    }
})

export default Payment

const Item =({id,name})=>{
    const navigation = useNavigation();
    const leftContent = <Text>Pull to activate</Text>;
    const {form} = useSelector(state=>state.LoginReducer)


    const deletePayment=()=>{
        const data={
            name:form.name
        }

        Axios.delete(`https://api.jokolodang.com/api/v1/payments/${id}`, data)
        .then(res=>{
            console.log('res : ', res);
            getData()
        })
    }

    const deleteData=()=>{
        Alert.alert(
            'Peringatan!',
            'Anda Yakin Akan Menghapus Item Ini?',
            [
                {
                text: 'Batal',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
                },
                { 
                    text: 'Hapus', 
                    onPress: () => deletePayment()
                }
            ],
            { cancelable: false }
            );
    }
    const leftButtons = [
    <TouchableHighlight style={{width:'100%', alignItems:'flex-end', alignContent:'center', justifyContent:'center', marginVertical:5}}>
        <TouchableOpacity style={{backgroundColor:'red', borderRadius:10}} onPress={deleteData}>
            <Text style={{fontSize:15, color:colors.secondary, padding:5}}>Hapus</Text>
        </TouchableOpacity>
    </TouchableHighlight>,
    ];

    return(
        <Swipeable leftButtons={leftButtons}>
            {/* <Text>My swipeable content</Text> */}
        <View>
            <TouchableOpacity style={styles.itemList} onPress={()=>navigation.navigate('PaymentChange', {id:id, paymentName:name})}>

                <View>
                    <Text style={styles.list}>{name}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="chevron-forward" style={styles.icon} />
                </View>

            </TouchableOpacity>
            <View style={styles.line} />
        </View>
        </Swipeable>
    )
}
