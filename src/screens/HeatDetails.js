import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class HeatDetail extends Component {
  render() {
    const { heat } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          featured
          title={`${heat.DeviceName.toUpperCase()}`}
          caption={heat.Temperature}
        />
      </ScrollView>
    );
  }
}

export default HeatDetail;
