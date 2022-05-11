import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating-widget';

export const Card = ({card = {}}) => {
  const {
    title = '',
    image = '',
    stars = '',
    people = '',
    price = '',
    deal = '',
  } = card;
  const dealString = deal === null ? '0' : deal.toString();
  const priceString = price === null ? '0' : price.toString();
  const editedDeal = dealString.replace(',', '');
  const editedPrice = priceString.replace(',', '');
   const finalDeal = editedDeal === '0' ? null : editedPrice - editedDeal;
   const finalDeal2 = finalDeal === null ? null : finalDeal.toFixed(2);

  return (
    <View>
      <View style={Style.main}>
        <View style={Style.sectionLeft}>
          <View style={Style.star}>
            <StarRating rating={stars} starSize={20} starStyle={{width: 5}} />
            <Text style={{paddingHorizontal:10}}>{people}</Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{color: 'grey', left: 5, width: '40%'}}
              numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={Style.deal}>
            <Text style={{color: 'red', fontSize: 11}}>
              {finalDeal2 ? '$' : null}
              {finalDeal2}
            </Text>
            {finalDeal2 ? <Text style={Style.dealtxt}> تخفیف</Text> : null}
          </View>
          <Text style={Style.price}>
            {price ? '$' : null}
            {price}
          </Text>
        </View>
        <View>
          <Image style={Style.img} source={{uri: image}} resizeMode="contain" />
        </View>
      </View>
      <View style={Style.divider}></View>
    </View>
  );
};
const Style = StyleSheet.create({
  main: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  sectionLeft: {
    marginRight: 50,
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 4,
    alignItems: 'center',
  },
  price: {fontSize: 20, color: 'black'},
  deal: {flexDirection: 'row', alignItems: 'center', paddingTop: 3},
  img: {width: 125, height: 125, alignSelf: 'flex-end'},
  dealtxt: {fontSize: 9, marginStart: 5},
  divider: {height: 1, width: '90%', backgroundColor: 'grey'},
});
