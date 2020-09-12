import React, { Component } from 'react';
import { ScrollView } from 'react-native';

export class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return <ScrollView>{/* Do something */}</ScrollView>;
  }
}

export default About;
