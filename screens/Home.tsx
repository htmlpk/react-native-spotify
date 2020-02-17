import React from 'react'
import { View, Text } from 'react-native'
import { Linking } from 'react-native';

function HomeScreen() {
  Linking.openURL('https://accounts.spotify.com/authorize?response_type=code&client_id=e3f819a41ec74bbf9b546a9d72cd5a49&redirect_uri='+'intent://#Intent;scheme=mytsproject://rndeeplink;package=com.mytsproject;end');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen