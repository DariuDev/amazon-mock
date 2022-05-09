import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import star from '../assets/star';

export const Card = ({card = {}}) => {
  const {
    title = 'apple',
    image = 'https://m.media-amazon.com/images/I/91ZJjLMpwQL._AC_UY218_.jpg',
    stars = '4.7',
    people = '316',
    price = '4.99',
    deal = '319',
    id= '',
  } = card;
  const ratingArray = Array.from(new Array(Math.floor(5)));

  return (
    <View
      style={{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <View style={{marginRight: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        {/* <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={7}
        rating={stars}
        fullStarColor={'red'}
      /> */}
          <Text>stars:  {stars} </Text>
          <Text> view:  {people}</Text>
        </View>
        <View style={{width: '60%'}}>
          <Text style={{color: 'grey'}} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'red'}}>
            {deal ? '$' : null}
             {deal}
          </Text>
          {deal ? <Text style={{fontSize: 10, marginStart: 5}}>  تخفیف</Text> : null} 
        </View>
        <Text style={{fontSize: 20}}>{price ? '$' : null}{price}</Text>
      </View>
      <View>
        <Image
          style={{width: 125, height: 125, alignSelf: 'flex-end'}}
          source={{uri: image}}
        />
      </View>
    </View>
  );
};
