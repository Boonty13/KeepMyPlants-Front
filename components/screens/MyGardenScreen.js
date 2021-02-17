import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Container, Header, Content, Thumbnail, Card, CardItem, Icon, Body, Right } from 'native-base';

import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import { green, lightGreen, darkGreen, red, gold } from '../tools/globalVariables'

function MyGardenScreen() {
  //   <Card containerStyle={{padding: 0}} >
  //   {
  //     users.map((u, i) => <ListItem key={i} />)
  //   }
  // </Card>
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Mon jardin</Text>

{/* Picto legend */}
    <Card>
      <Text><Ionicons name="ios-sunny" size={24} color="black" /> : A besoin de soleil</Text>
      <Text><MaterialCommunityIcons name="home-export-outline" size={24} color="black" /> : Plante d'extérieur</Text>
      <Text><MaterialCommunityIcons name="home-import-outline" size={24} color="black" /> : Plante d'intérieur</Text>
      <Text><Ionicons name="md-partly-sunny" size={24} color="black" /> : Pas de soleil direct</Text>
      <Text><MaterialCommunityIcons name="dumbbell" size={24} color="black" /> : Plante résistante</Text>
    
    </Card>

{/* Plants cards */}

      <ScrollView>
        <View style={{ borderColor: green, borderWidth: 2, marginBottom: 3 }}>
          <View style={{ flexDirection: 'row', paddingTop: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '10%' }}>
              {/* <Entypo name="emoji-happy" size={24} color={green} /> */}
              <FontAwesome name="battery-full" size={20} color={green} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
              <Text style={{ color: green }} >Ouf, ces plantes ont été arrosées récemment</Text>
            </View>
          </View>
          <Card transparent>
            <CardItem >
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191643/succulente_nueurv.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-sunny" size={24} color="black" />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>

            <CardItem >
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191643/succulente_nueurv.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>
          </Card>
        </View>

        <View style={{ borderColor: gold, borderWidth: 2, marginBottom: 3 }}>
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '10%' }}>
              {/* <Entypo name="emoji-neutral" size={24} color={gold} /> */}
              <FontAwesome name="battery-half" size={20} color={gold} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
              <Text style={{ color: gold }} >Mmh... Je ferai bien d'aller vérifier</Text>
            </View>
          </View>
          <Card transparent>
            <CardItem>
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191642/rosier_dvcdw6.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>
            <CardItem>
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191642/rosier_dvcdw6.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>
          </Card>
        </View>

        <View style={{ borderColor: red, borderWidth: 2, marginBottom: 3 }}>
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '10%' }}>
              {/* <Entypo name="emoji-sad" size={24} color={red} /> */}
              {/* <FontAwesome name="battery-quarter" size={20} color={red} /> */}
              <FontAwesome name="battery-empty" size={20} color={red} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
              <Text style={{ color: red }} >Oups, il est temps de les arroser !</Text>
            </View>
          </View>
          <Card transparent>
            <CardItem>
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191643/succulente_nueurv.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>
            <CardItem>
              <Thumbnail source={{ uri: 'https://res.cloudinary.com/boonty/image/upload/v1612191642/rosier_dvcdw6.jpg' }} />
              <Text>Plante</Text>
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={darkGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Ionicons name="ios-water" size={15} color={lightGreen} style={{ margin: -2 }} />
              <Right style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <Ionicons name="md-trash" size={20} color="black" />
              </Right>
            </CardItem>
          </Card>
        </View>

      </ScrollView>
    </View>
  );
}

export default MyGardenScreen