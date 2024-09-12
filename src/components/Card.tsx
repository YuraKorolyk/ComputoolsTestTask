import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IImage} from '../store/app/types.ts';

interface CardProps {
  item: IImage;
}

const Card: FC<CardProps> = ({item}) => {
  if (!item) return;
  return (
    <View style={styles.container}>
      <Image source={{uri: item?.download_url ?? ''}} style={styles.image} />
      <Text style={styles.authorText}>{item?.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  authorText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
