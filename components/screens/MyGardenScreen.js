import React, { useState } from 'react'
import { View, Text, ScrollView, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import { Tooltip, Overlay, Button, Divider } from 'react-native-elements';
import { Container, Header, Content, Thumbnail, Card, CardItem, Icon, Body, Right } from 'native-base';

import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import { green, lightGreen, darkGreen, red, gold } from '../tools/globalVariables'

function MyGardenScreen() {
  //   <Card containerStyle={{padding: 0}} >
  //   {
  //     users.map((u, i) => <ListItem key={i} />)
  //   }
  // </Card>
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingTop: '8%' }}>

      {/* Plants cards */}

      {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={toggleOverlay}>
        <Text style={styles.textStyle}>Open Overlay</Text>
      </Pressable> */}

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
        <View>
          <Text style={{ width: '100%', textAlign: 'center', color: darkGreen }}>LEGENDE</Text>
          <Divider style={{ marginVertical: 5 }} />
          <Text style={{ color: darkGreen }}><Ionicons name="ios-sunny" size={24} color={darkGreen} /> : A besoin de soleil</Text>
          <Text style={{ color: darkGreen }}><MaterialCommunityIcons name="home-export-outline" size={24} color={darkGreen} /> : Plante d'extérieur</Text>
          <Text style={{ color: darkGreen }}><MaterialCommunityIcons name="home-import-outline" size={24} color={darkGreen} /> : Plante d'intérieur</Text>
          <Text style={{ color: darkGreen }}><Ionicons name="md-partly-sunny" size={24} color={darkGreen} /> : Pas de soleil direct</Text>
          <Text style={{ color: darkGreen }}><MaterialCommunityIcons name="dumbbell" size={24} color={darkGreen} /> : Plante résistante</Text>
        </View>
      </Overlay>

      <ScrollView>

        {/* GREEN */}
        <View style={{ borderColor: green, borderWidth: 2, marginBottom: 3 }}>

          <View style={{ flexDirection: 'row', paddingTop: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '10%' }}>
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

              <Pressable onPress={toggleOverlay}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Ionicons name="ios-sunny" size={24} color="black" />
                  <MaterialCommunityIcons name="home-export-outline" size={24} color="black" />
                  <MaterialCommunityIcons name="home-import-outline" size={24} color="black" />
                  <Ionicons name="md-partly-sunny" size={24} color="black" />
                  <MaterialCommunityIcons name="dumbbell" size={24} color="black" />
                </View>
              </Pressable>

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


        {/* GOLD */}
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


        {/* RED */}
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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default MyGardenScreen