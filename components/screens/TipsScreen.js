import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import TipsCard from '../cards/TipsCard'

function TipsScreen() {

  return (
    <View style={{ flex: 1,backgroundColor: '#e67e22', justifyContent: 'center' }}>
      <Text>Les astuces</Text>
      <ScrollView>
        <TipsCard />
      <TipsCard />
      <TipsCard />
      <TipsCard />
      </ScrollView>
      
    </View>
  );
}

export default TipsScreen