import { View, Text, Pressable, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import React from 'react'

interface props{
    title:string,
    style?: StyleProp<ViewStyle>,
    onPress?:()=> void,
}

export default function Button({title, style, onPress}:props) {
    const styles = StyleSheet.create({
        button:{
            width:'100%',
            paddingVertical:18,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#0075FF',
            borderRadius:17
        },
        text:{
            color:'white',
            fontWeight:'600'
        }
    })
  return (
    <Pressable onPress={onPress} style={[
        styles.button,
        style
    ]}>
        <View><Text style={styles.text}>{title}</Text></View>
    </Pressable>
  )
}