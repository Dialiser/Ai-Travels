import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect ,  useState } from 'react'
import { useNavigation,useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword }from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig';
export default function SingIn() {
   const router=useRouter();
  const navigation=useNavigation();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(()=>{

  navigation.setOptions({
    headreShown:false
  })
  },[])

const onSignIn=()=>{

  if(!email&&!password&&!fulName)
    {
      ToastAndroid.show('please enter Email & Password' , ToastAndroid.LONG);
      return;
    }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
}

  return (
    <View style={{padding:25,marginTop:60, backgroundColor:Colors.WHITE,paddingTop:40,height:"100%"}}>

      <TouchableOpacity onPress={()=>router.back()}> 
       <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={{
        fontSize:30,
        marginTop:30,
          
      }}>Let's Sign You In</Text>

<Text style={{
        fontSize:30,
       color:"#808080",

         
      }}>WElcome Back</Text>

<Text style={{
        fontSize:30,
        color:"#808080",
       
      }}>You 've been missed</Text>

      <View style={{ marginTop:38}}>
        <Text>Emai</Text>
        <TextInput style={{borderWidth:1,borderRadius:15,padding:15,borderColor:"#808080",}}
        onChangeText={(value)=>setEmail(value)}
         placeholder='Enter Email'/>
      </View>

      <View style={{ marginTop:20,}}>
        <Text>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={{borderWidth:1,borderRadius:15,padding:15,borderColor:"#808080",}}
        onChangeText={(value)=>setPassword(value)}
         placeholder='Enter Pasword'/>
      </View>


      <TouchableOpacity onPress={onSignIn} style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50,
      }}>
      
      <Text style={{color:Colors.WHITE,textAlign:"center"}}>Sing In</Text>

      </TouchableOpacity>

      <TouchableOpacity 
      onPress={ ()=>router.replace('/auth/sign-up')}
      style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        borderWidth:1,
        marginTop:20

         
      }}>
      
      <Text style={{color:Colors.PRIMARY,textAlign:"center"}}>Create Account</Text>

      </TouchableOpacity>
    </View>
  )
}

 
 
