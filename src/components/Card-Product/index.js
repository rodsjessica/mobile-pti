import React from 'react';
import styles from './style';
import {View, Text, Image} from 'react-native';
import {icons, images} from '../../assets/index';

export function CardProduct(props) {
  const burguer = images.Burguer;
  const pancakes = images.Pancakes;
  const frenchfries = images.FrenchFries;
  const fire = icons.Fire;

  function renderImage() {
    return props.data.name === 'Beef Burguer'
      ? burguer
      : props.data.name === 'Pancakes'
      ? pancakes
      : frenchfries;
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoProduct}>
        <Text style={styles.product}>{props.data.name}</Text>
        <View style={styles.calories}>
          <View style={styles.iconView}>
            <Image source={fire} style={styles.icon} />
          </View>
          <Text style={styles.productCalories}>
            {props.data.amount} calorias
          </Text>
        </View>
        <Text style={styles.price}>$ {props.data.price}</Text>
      </View>
      <Image source={renderImage()} style={styles.imageProduct} />
    </View>
  );
}
