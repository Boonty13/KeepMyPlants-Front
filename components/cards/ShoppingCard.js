import React, { useState } from 'react';


import { View, Text, Image, ScrollView, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import { Tooltip, Overlay, Divider } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import * as Color from '../tools/globalVariables'

function ShoppingCard(props) {

  // console.log(props.img)
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
        <View>
          <Text style={{ width: '100%', textAlign: 'center', color: Color.darkGreen }}>LEGENDE</Text>
          <Divider style={{ marginVertical: 5 }} />
          <Text style={{ color: Color.darkGreen }}><Ionicons name="ios-sunny" size={24} color={Color.darkGreen} /> : A besoin de soleil</Text>
          <Text style={{ color: Color.darkGreen }}><MaterialCommunityIcons name="home-export-outline" size={24} color={Color.darkGreen} /> : Plante d'extérieur</Text>
          <Text style={{ color: Color.darkGreen }}><MaterialCommunityIcons name="home-import-outline" size={24} color={Color.darkGreen} /> : Plante d'intérieur</Text>
          <Text style={{ color: Color.darkGreen }}><Ionicons name="md-partly-sunny" size={24} color={Color.darkGreen} /> : Pas de soleil direct</Text>
          <Text style={{ color: Color.darkGreen }}><MaterialCommunityIcons name="dumbbell" size={24} color={Color.darkGreen} /> : Plante résistante</Text>
        </View>
      </Overlay>
      <Card>
        <CardItem >
          <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191643/succulente_nueurv.jpg' }} />
          <View style={{ marginHorizontal: '5%' }}>
            <Text style={{color:Color.darkGrey, fontWeight:'bold'}}>NOM PLANTE</Text>
            <Text note>
              <Ionicons name="ios-water" size={15} color={Color.darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={Color.darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={Color.lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={Color.lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={Color.lightGreen} style={{ margin: -2 }} />
            </Text>
          </View>


          <Pressable onPress={toggleOverlay}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="ios-sunny" size={18} color={Color.darkGreen} style={{marginHorizontal:1}} />
              <MaterialCommunityIcons name="home-export-outline" size={18} color={Color.darkGreen}  style={{marginHorizontal:1}}/>
              <MaterialCommunityIcons name="home-import-outline" size={18} color={Color.darkGreen} style={{marginHorizontal:1}} />
              <Ionicons name="md-partly-sunny" size={18} color={Color.darkGreen}  style={{marginHorizontal:1}}/>
              <MaterialCommunityIcons name="dumbbell" size={18} color={Color.darkGreen}  style={{marginHorizontal:1}}/>
            </View>
          </Pressable>

          <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <Ionicons name="ios-cart" size={24} color={Color.darkGrey} />
          </Right>
        </CardItem>
      </Card>
    </View>

  );
};

export default ShoppingCard;