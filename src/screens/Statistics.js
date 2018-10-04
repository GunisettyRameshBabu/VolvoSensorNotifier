import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

import ModalDropdown from 'react-native-modal-dropdown';
import BarChartScreen from '../Charts/barchart';
import PieChartScreen from '../Charts/PieChart'

class Statistics extends React.Component {


  constructor(props){
    super(props);
    this.state = {loading: true,refreshing: false , chartType : "Bar Chart"};
  }

 selectedValue (index,value) {
    this.setState({ loading : true , chartType : value , refreshing : false });
  }
  componentDidMount(){
    this.setState({ loading : false });
  }
  render() {
    if(this.state.loading){
      return <ActivityIndicator size="large" color="#03a9f4" style={{flex:1, alignItems:'center', justifyContent:'center'}} />
    }
    if(this.state.chartType == "Bar Chart")
    {
    return (
     
      <View style={{flex: 1}}>
        
       <ModalDropdown options={['Bar Chart', 'Pie Chart']} animated={true} defaultValue = "Bar Chart" onSelect={this.selectedValue}/>
        
        <View style={styles.container}>
          <BarChartScreen/>
        </View>
      </View>
    );
  }
  if(this.state.chartType == "Pie Chart")
  {
  return (
   
    <View style={{flex: 1}}>
      
     <ModalDropdown options={['Bar Chart', 'Pie Chart']} animated={true} defaultValue = "Pie Chart" onSelect={this.selectedValue}/>
      
      <View style={styles.container}>
        <PieChartScreen/>
      </View>
    </View>
  );
}

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default Statistics;
