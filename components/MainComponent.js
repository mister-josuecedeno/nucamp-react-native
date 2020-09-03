import React, { Component } from 'react';
import Directory from './DirectoryComponent';
// import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: 'Directory',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //     selectedCampsite: null,
  //   };
  // }

  // onCampsiteSelect(campsiteId) {
  //   this.setState({ selectedCampsite: campsiteId });
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === 'ios' ? 0 : ExpoStatusBar.Constants.statusBarHeight,
        }}
      >
        <DirectoryNavigator />
      </View>
    );
  }
}

export default Main;
