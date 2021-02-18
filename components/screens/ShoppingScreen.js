import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import ShoppingCard from '../cards/ShoppingCard'

function ShoppingScreen() {
  return (
    <View style={{ justifyContent: 'center', paddingTop: '8%' }}>
      <ScrollView>
        {/* <View style={{ flexDirection: 'row', marginHorizontal: '1%', flexWrap: 'wrap' }}> */}

          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />

        {/* </View> */}
      </ScrollView>

    </View>
  );
}

export default ShoppingScreen