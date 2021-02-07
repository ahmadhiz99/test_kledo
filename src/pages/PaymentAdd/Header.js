import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../../component/Title'
import BackButton from '../../component/BackButton'

const Header=({title, screen})=>{
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <BackButton screen={screen} style={styles.backButton} />
            </View>
            <View style={styles.textContainer}>
                <Title title={title} style={styles.title} />
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
        alignItems:'flex-start'
    },
    backButton:{
    }
})

export default Header;