import {React} from 'react'
import {TouchableOpacity,TextInput,View} from 'react-native'

export default class SignupLoginScreen extends Component{
  
  constructor(){

super()

this.state={

email:'',
password:'',
confirmPassword:'',
firstName:'',
lastName:'',
contact:'',
address:''

}

  }

    render(){
    
return(
    <View>
          <TextInput
          style={{height:80,width:30,borderWidth:2}}
          placeHolder="e.x - Barter@gmail.com"
          keyboardType='email-address'
          onChangeText={(text)=>{
              this.setState=({
                  email:text
              })
          }}
          />

         <TextInput
          style={{height:80,width:30,borderWidth:2}}
          placeHolder="Password"
          secureTextEntry={true}
          onChangeText={(text)=>{
              this.setState=({
                  password:text
              })
          }}
          />

          <TouchableOpacity style = {{height:40,width:70,borderWidth:2}}
onPress={()=>{
    this.userLogin(emailId,password)
}}>
    <Text>Login</Text>
</TouchableOpacity>

<TouchableOpacity style = {{height:40,width:70,borderWidth:2}}
onPress={()=>{
    this.userSignUp(emailId,password)
}}>
    <Text>SignUp</Text>
</TouchableOpacity>
    </View>
)
    }

    userSignUp=(emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
           return alert("Password Does not Match!")
        }
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then(
            (response)=>{
                return alert("User Successfully SignedUp")
            }
        ).catch(function(error){
            var errorCode = error.code
            var errorMessage = error.message 
            return alert(errorMessage)
        })
        db.collection('user').add({
            first_name:this.state.firstName,
            last_name:this.state.last_name,
            contact:this.state.contact,
            email_id:this.state.emailId,
            address:this.state.address
        })
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(
            ()=>{
                return alert("User Login Successful")
            }
        ).catch((error)=>{
            var errorCode = error.code
            var errorMessage = error.message
            return alert(errorMessage)
        })
    }
}