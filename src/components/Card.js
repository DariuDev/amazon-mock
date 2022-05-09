import React, {useContext} from 'react';
import {FlatList, Text, View, Image} from 'react-native';

export const Card = ({card = {}}) => {
  const {
    title = 'apple',
    image = 'https://m.media-amazon.com/images/I/91ZJjLMpwQL._AC_UY218_.jpg',
    stars = '4.7',
    people = '316',
    price = '4.99',
  } = card;

  return (
    <View style={{margin: 10, flexDirection: 'row'}}>
      <View>
        <Text>{title}: title</Text>
        <Text>{stars}: stars</Text>
        <Text>{people}: people</Text>
        <Text>{price}: price</Text>
      </View>
      <View>
        <Image style={{width: 60, height: 50}} source={{uri: image}} />
      </View>
    </View>
  );
};
