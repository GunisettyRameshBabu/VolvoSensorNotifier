import React, { Component } from 'react';
import { WebView , ActivityIndicator , StyleSheet , Platform } from 'react-native';

export default class MyWeb extends Component {

  ActivityIndicatorLoadingView() {
    
    return (
 
      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://webchat.botframework.com/embed/TheVolvoBOT?s=UN7_cKJS3j4.cwA.y2A.cWtvzVclyJ0BKP0_hPdfTfpIvbdh1YjNy7c2LORcgCA'}}
        style={styles.WebViewStyle}
        javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}  
      />
    );
  }
}

const styles = StyleSheet.create(
  {
   
  WebViewStyle:
  {
     justifyContent: 'center',
     alignItems: 'center',
     flex:1,
     marginTop: (Platform.OS) === 'ios' ? 20 : 0
  },
   
  ActivityIndicatorStyle:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
  });