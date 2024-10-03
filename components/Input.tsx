import { View, Text, TextInput, StyleProp, ViewStyle, InputModeOptions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
interface InputProps{
    style?: StyleProp<ViewStyle>,
    initialValue?:string,
    placeholder:string,
    isPassword?:boolean,
    inputMode?:InputModeOptions
}
export default function Input({style,initialValue,placeholder, inputMode, isPassword}:InputProps) {
    const [show, setShow] = useState(false)
  return (
    <View style={[
        {width:"100%", borderRadius:20, borderColor:'#DDDFE2', borderWidth:2, backgroundColor:'white', paddingVertical:15, paddingHorizontal:25, flexDirection:'row'},
        style
    ]}>
      <TextInput placeholder={placeholder} secureTextEntry={!show && isPassword} placeholderTextColor={"#ABACAE"} cursorColor={"#000"} defaultValue={initialValue} inputMode={inputMode} style={{flex: 1, backgroundColor:'transaprent', color:'black'}} />
      {isPassword && <TouchableOpacity onPress={()=>setShow(!show)}><Image style={{width:30, height:30}} source={show?require('../assets/icons/eye-closed.png'):require('../assets/icons/eye-open.png')} /></TouchableOpacity>}
    </View>
  )
}