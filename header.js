import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header
        backGroundColor={'#45690C'}
        centerComponent={{
          text: 'POCKET DICTIONARY APP',
          style: { color: '#FFFFFF' },
        }}
      />
    );
  }
}
