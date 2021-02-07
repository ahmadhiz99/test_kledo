import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
// import {colors} from '../../utils'
import {TouchableOpacity} from 'react-native-gesture-handler'

const Title =({title})=>{
    return(
            <Text style={styles.title}>
                {title}
            </Text>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        fontWeight:'bold'
    }
})

export default Title;