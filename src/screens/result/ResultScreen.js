import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React,{useContext} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';
import {Card} from '../../components/card/Card';

export const Result = () => {
  const {result} = useContext(ResultProvider);

  return (
    <View>
      <FlatList
        data={result}
        renderItem={({item}) => {
          return (
            <SafeAreaView>
            <Card card={item}/> 
            </SafeAreaView>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
