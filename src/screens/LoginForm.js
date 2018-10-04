import React from 'react'
import { View, Text, TextInput, TouchableOpacity,StyleSheet , Alert} from 'react-native';

export default class LoginForm extends React.Component {
    onButtonPress()
    {
        Alert.alert("Success");
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View>
        <TextInput style = {styles.input} 
            autoCapitalize="none" 
            onSubmitEditing={() => this.passwordInput.focus()} 
            autoCorrect={false} 
            keyboardType='email-address' 
            returnKeyType="next" 
            placeholder='Email or Mobile Num' 
            />

<TextInput style = {styles.input}   
           returnKeyType="go" 
           ref={(input)=> this.passwordInput = input} 
           placeholder='Password' 
           
           secureTextEntry/>

<TouchableOpacity style={styles.buttonContainer} 
                  onPress={() =>
                    navigate('SuccessLogin') } >
          <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 
</View>)
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000000',
        width: 300
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})