import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function TipsCard(props) {

  // console.log(props.img)

  return (
    // <View style={{flex:1, width:'50%'}}>
    <Card containerStyle={{ width: '48%', margin:'1%' }}  >
      <Card.Image source={require('../../assets/basilic.jpg')}>
        {/* <Card.Image source={uri=props.img}> */}

        <Card.Title>HELLOo WRLD</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure than actual design.
    </Text>

      </Card.Image>
    </Card>
    // </View>
  );
};

export default TipsCard;