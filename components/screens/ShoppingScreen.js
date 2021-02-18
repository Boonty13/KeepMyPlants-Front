import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import TipsCard from '../cards/TipsCard'

function ShoppingScreen() {
  return (
    <View style={{ justifyContent: 'center', paddingTop: '8%' }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginHorizontal: '1%', flexWrap: 'wrap' }}>

          <TipsCard />
          <TipsCard />
          <TipsCard />
          <TipsCard />

        </View>
      </ScrollView>

    </View>
  );
}

export default ShoppingScreen