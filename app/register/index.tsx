import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { router } from 'expo-router'

export default function RegisterPage() {



  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} bounces={true} contentContainerStyle={{alignItems:'center',}} style={{width:'100%', flex:1, backgroundColor:'#F8F8F8'}}>
      <View style={styles.header}>
        <Text style={styles.signInText}>Sign Up</Text>
        <Text style={styles.description}>{"Please enter the required\ninformation to create your Discord account."}</Text>
      </View>


      <Text style={{color:'black', fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginLeft:'8%', marginBottom:6}}>First Name</Text>
      <Input placeholder='Enter your first name' style={{width:'90%', marginBottom:20}} inputMode='text'/>

      <Text style={{color:'black', fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginLeft:'8%', marginBottom:6}}>Last Name</Text>
      <Input placeholder='Enter your last name' style={{width:'90%', marginBottom:20}} inputMode='text'/>

      <Text style={{color:'black', fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginLeft:'8%', marginBottom:6}}>Email</Text>
      <Input placeholder='Enter your email' style={{width:'90%', marginBottom:20}} inputMode='email'/>

      <Text style={{color:'black', fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginLeft:'8%', marginBottom:6}}>Password</Text>
      <Input placeholder='Enter your password' isPassword={true} style={{width:'90%', marginBottom:20}} inputMode='text'/>

      <Text style={{color:'black', fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginLeft:'8%', marginBottom:6}}>Confirm Password</Text>
      <Input placeholder='Confirm your password' isPassword={true} style={{width:'90%', marginBottom:30}} inputMode='text'/>

      <Button title='Register' style={{width:'90%', borderRadius:45, marginBottom:20}} />

      <View style={{flexDirection:'row', alignSelf:'flex-start', marginLeft:'10%', marginBottom:40}}>
        <Text style={{color:'#605E60', fontSize:14, fontWeight:'400', marginRight:9}}>Already have an account?</Text>
        <Pressable onPress={()=>router.replace('/login')}><Text style={{color:'#0029B7', fontSize:14, fontWeight:'800'}}>Sign In</Text></Pressable>

      </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
    },
    header:{
        width:'100%',
        height:250,
        marginBottom:'10%',
        backgroundColor:'#1072E6',
        borderBottomRightRadius:35,
        borderBottomLeftRadius:35,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingHorizontal:'10%',
        paddingVertical:'10%'
    },
    signInText:{
      color:'white',
      fontWeight:'700',
      fontSize:23,
      marginBottom:10
    },
    description:{
      color:'#CDDFF9',
      fontWeight:'300',
      fontSize:15,
      marginBottom:10
    }
    
})