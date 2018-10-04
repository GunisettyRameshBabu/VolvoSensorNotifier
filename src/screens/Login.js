import React from 'react'
import {StyleSheet , View , Image , Text ,  TextInput, TouchableOpacity , Alert , ActivityIndicator, TouchableHighlight} from 'react-native'
import LoginForm from './LoginForm'
import TextField from '../Controls/TextBoxField'
import validation from '../validation/LoginValidation'
import validate from '../validation/ValidateFunction'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '' ,
            loading : false
          }
    }
    
   
      changeUserdata(data, key) {
        let userdetails = this.state;
        userdetails[key] = data;
        this.setState(userdetails);
    }

    validateEmail = (text) => {
        Alert.alert(text,text);
        if (this.state.email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==0) {
            return true;
        } else {
            return false;
        }
        }

      login = () => {
        this.setState({loading: true});
       
          if(this.state.email == "")
          {
           
            this.setState({emailError: 'Please Enter the Email or phone number'})
          }
          else{
            //   if(this.validateEmail(this.state.email))
            //   {
            //     this.setState({emailError: 'Please Enter the valid email'})
            //   }
            //   else{
            //     this.setState({emailError: ''})
            //   }

           
          }

          if(this.state.password == "")
          {
            
            this.setState({passwordError: 'Please Enter the password'})
          }
          else{
            this.setState({passwordError: ''})
          }
          
        
    
        // this.setState({
        //   emailError: emailError,
        //   passwordError: passwordError
        // })
        if ( this.state.email != '' && this.state.password != '') {
            this.props.navigation.navigate('SuccessLogin' , { name: this.state.email , password : this.state.password });
          }
          
          this.setState({loading: false});
      }

    render() {
        const { navigate } = this.props.navigation;
        if(this.state.loading){
            return  <ActivityIndicator size="large" color="#0000ff" />
        }
        return (
            <View style={styles.container}>
            
            <Text style={styles.textSize}>Welcome to Volvo Sensor Notifier</Text>
            <Image resizeMode="contain" style={styles.logo} source={require('../Images/Volvo.png')} />
           
            <View style={styles.SectionStyle}>
 
 <Image source={require('../Images/Email.png')} style={styles.ImageStyle} />
 <TextInput style={{flex:1}} 
            autoCapitalize="none" 
            onSubmitEditing={() => this.passwordInput.focus()} 
            autoCorrect={false} 
            keyboardType='email-address' 
            returnKeyType="next" 
            placeholder='Email or Mobile Number'
            underlineColorAndroid="transparent"
             onChangeText={value =>  this.setState({email: value.trim() , emailError : ''}) } />
            
  

 </View>
 <Text style={styles.errorMessage}>{this.state.emailError}</Text>

           
           <View style={styles.SectionStyle}>
 
 <Image source={require('../Images/password.png')} style={styles.ImageStyle} />
 <TextInput style={{flex:1}}   
           returnKeyType="go" 
           ref={(input)=> this.passwordInput = input} 
           placeholder='Password' 
           onChangeText={value => this.setState({password: value.trim(), passwordError : ''})}
           underlineColorAndroid="transparent"
           secureTextEntry/> 
</View>
           <Text style={styles.errorMessage}>{this.state.passwordError}</Text>
<TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 }
                  onPress={() =>
                    this.login() } >
          <Text  style={styles.TextStyle}>LOGIN</Text>
</TouchableOpacity> 
           </View>)
      }
    }
  
      // define your styles
      const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10 ,
            backgroundColor:'transparent',
          },
          SubmitButtonStyle: {
 
            marginTop:10,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:30,
            marginRight:30,
            backgroundColor:'#00BCD4',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff',
            width : 100
          },
         
          TextStyle:{
              color:'#fff',
              textAlign:'center',
          },
        loginContainer:{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center'
        },
        logo: {
           
            width: 300,
            height: 100
        },
        textSize: {
            fontSize: 18
        },
        searchSection: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        searchIcon: {
            padding: 10,
        },
        input: {
            width : 300,
        },
        buttonContainer:{
            backgroundColor: '#2980b6',
            paddingVertical: 15
        },
        buttonText:{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700',
            width : 100
        } ,
        errorMessage : {
            color : 'red'
        },
        SectionStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: .5,
            borderColor: '#000',
            height: 40,
            borderRadius: 5 ,
            margin: 10
        },
         
        ImageStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode : 'stretch',
            alignItems: 'center'
        },
        submit:{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:20,
            paddingBottom:20,
            backgroundColor:'#68a0cf',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          },
          submitText:{
              color:'#fff',
              textAlign:'center',
              fontWeight: '700',
           
          }
    
    },
        
        
        ); 