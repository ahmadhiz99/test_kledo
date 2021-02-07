import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../../component/Title'
import Filter from '../../component/Filter'


const Header=({title, screen})=>{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Title title={title} style={styles.title} />
            </View>
            <View style={styles.iconContainer}>
                <Filter screen={screen} style={styles.filter} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
    },
    textContainer:{
        alignSelf:'center', 
        position:'absolute' 
    },
    iconContainer:{
        flex:1, 
        alignItems:'flex-end'
    },
    filter:{
    }
})

export default Header;