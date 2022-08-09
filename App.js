import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,   ScrollView, 
   TouchableHighlight,Modal} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown'
 import Spinner from 'react-native-loading-spinner-overlay'; 
import {firebase} from './Firebase.js'

export default function App() {
const gender = [ 
     { label: 'Male', value: 'Male' }, 
     { label: 'Female', value: 'Female' },
     { label: 'Other', value: 'Other' },
     ]
     
   const formdata = firebase.firestore().collection("form-data")
     
     const [name,setName]=useState('')
     const [phone,setPhone]=useState('')
     const [add,setAdd]=useState('')
     const [gen,setGen]=useState('')
     const [spin,setSpin]=useState(false)

const OnSubmit=()=>{
 setSpin(true)
  
  if(name.length==0 || phone.length==0 || add.length== 0 || gen==0){
    alert("all fields are required")
    return
  }
  else if(phone.length!=10){
    alert("enter valid phone number with 10 digits")
    return;
  }
  else if(name.length<3){
    alert("name should have atleast 3 characters")
    return
  }
  else if(add.length<10){
    alert("address should have atleast 10 characters")
    return
  }
  
  else{
    formdata
.add({name,
phone,
address: add,
gender: gen
})
.then(()=>{
  setName('')
  setPhone('')
  setAdd('')
  setGen('')
  setSpin(false)
  alert("data saved")
})
.catch((error)=>{
  alert(error)
})
  }
  
}

  return (
 <ScrollView >
<Modal animationType="slide" transparent={true} visible={spin}> 
 <Spinner visible={true} /> 
 </Modal>
    <View style={styles.container}>
 <View style={styles.input}> 
 <Text style={styles.notetxt}>Name</Text> 
 <TextInput value={name} onChangeText={text=>setName(text)}  style={styles.note} /> 
 </View>
 <View style={styles.input}> 
 <Text  style={styles.notetxt}>Phone Number</Text> 
 <TextInput keyboardType="number-pad" value={phone} onChangeText={nam=>setPhone(nam)}  style={styles.note} /> 
 </View>
 
 <View style={styles.input}> 
 <Text style={styles.notetxt}>Address</Text> 
 
 <TextInput onChangeText={addr=>setAdd(addr)} multiline={true}  style={styles.note} value={add}/> 
 
 </View>


 <View style={styles.input}> 
 <Text style={styles.notetxt}>Gender</Text>
  
 <Dropdown data={gender} style={styles.note} onChange={text=>setGen(text.label)} labelField="label" valueField="value" value={gen}/>
 </View>
 
  <TouchableHighlight style={styles.Frame3} onPress={OnSubmit}> 
 <Text style={styles.Txt417}>Submit</Text> 
 </TouchableHighlight> 
    </View>
 </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
   
   note:{ 
     height: 45, 
     display: "flex", 
     flexDirection: "column", 
     justifyContent: "center", 
     alignItems: "center", 
   paddingLeft: 10, 
  
     borderWidth: 0.1, 
     borderColor: "black", 
       borderRadius: 4, 
   width: 320,   
     }, 
   maincont:{ 
       display: "flex", 
       justifyContent: "center", 
     }, 
   notetxt:{ 
     fontWeight: "bold", 
     marginLeft: 10, 
      
   }, 
   input:{ 
     display:"flex", 
     justifyContent:"center", 
     alignItems: "center", 
     marginVertical: 25, 
   },
      Frame3: { 
     display: "flex", 
      
     justifyContent: "center", 
     alignItems: "center", 
     paddingTop: 11, 
     paddingBottom: 11, 
     paddingLeft: 65, 
     paddingRight: 65, 
     borderRadius: 15, 
     backgroundColor: "rgba(63,189,241,1)", 
     width: 320, 
     height: 60, 
   }, 
    Txt417: { 
     fontSize: 14, 
     fontWeight: "bold", 
     lineHeight: 24, 
     color: "rgba(255, 255, 255, 1)", 
     textAlign: "center", 
     justifyContent: "center", 
     textTransform: "uppercase", 
   }
});
