import React , {Component} from 'react'
import { Text,
    View,
    ScrollView,
     ActivityIndicator, 
     RefreshControl ,
     Alert
    } from 'react-native'
import { List, ListItem } from 'react-native-elements';

 class Humidity extends Component 
{
    constructor(props){
        super(props);
        this.state = {HeatInfo:[], loading: true,refreshing: false};
      }

      getHeatInfo(){
        this.setState({HeatInfo:[], loading: true,refreshing: true});
        fetch('http://153.112.183.243/IOTWebAPI/api/iot')
        .then((response) => response.json())
        .then((res) => { 
          this.setState({HeatInfo: res,refreshing:false, loading: false});
          console.log(res); })
        .catch(err => {
          Alert.alert('Some thing went wrong, please check your internet connectivity and try again');
        })
      }
      componentDidMount(){
        this.getHeatInfo();
      }
      onLearnMore = (heat) => {
        Alert.alert(
            'Heat Info',
          'Device Name : ' + heat.DeviceName +  ' \n Humidity : '+ heat.Humidity,
            [
             
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          ) 
      };
      render() {
        if(this.state.loading){
          return <ActivityIndicator size="large" color="#03a9f4" style={{flex:1, alignItems:'center', justifyContent:'center'}} />
        }
        return (
          <ScrollView refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={ () => this.getHeatInfo()}
            />
          }>
            <List>
              {this.state.HeatInfo.map((heat) => (
                <ListItem
                  key={heat.Id}
                  
                  title={`${heat.DeviceName.toUpperCase()}`}
                  subtitle={heat.Humidity}
                  onPress={() => this.onLearnMore(heat)}
                />
              ))}
            </List>
          </ScrollView>
        );
      }
    }

export default Humidity;