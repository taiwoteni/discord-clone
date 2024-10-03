import Button from "@/components/Button";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.root}>
      <View style={styles.secondBackground} />
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/chat-bubble-2.png')} />
        <Text style={styles.introText}>Discord brings the team together, wherever you are</Text>
        <Button title="Get Started" onPress={()=>router.push("./register")} style={{width:'90%', marginBottom:'5%'}} />
        <Button title="Sign In" onPress={()=>{
          router.push("./login")
        }} style={{width:'90%', borderColor:'#9A8DB8', backgroundColor:'transparent', borderWidth:1.5}} />

        
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1F0367'
  },
  secondBackground:{
    position:'absolute',
    zIndex:1,
    backgroundColor:'#001686',
    left:0,
    top:0,
    width:'75%',
    height:'42%',
    borderBottomRightRadius:50,
  },
  container:{
    zIndex:3,
    width:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'50%',
    height:'20%',
    marginTop:'20%',
    marginBottom:50
  },
  introText:{
    paddingHorizontal:'10%',
    color:'white',
    fontSize:34,
    marginBottom:'20%',
    fontWeight:"700"
  }
});
