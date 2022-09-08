import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {CardProduct} from '../../components/Card-Product';
import data from './data.json';
import {icons} from '../../assets/index';

export function Home() {
  const search = icons.Search;
  const menu = icons.Menu;

  const dataProduct = data[0].product;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/77636115?v=4'}}
          style={styles.perfil}
        />
        <Image source={menu} style={styles.menu} />
      </View>
      <View style={styles.title}>
        <Text style={styles.textWelcome}>Welcome to Our</Text>
        <View style={styles.info}>
          <Text style={styles.textFood}>Foodi</Text>
          <Text style={styles.textApp}> App</Text>
        </View>
      </View>
      <View style={styles.viewInput}>
        <TouchableOpacity style={styles.buttonSearch}>
          <Image source={search} style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Find your food..." />
      </View>
      <View style={styles.wrapperCardProduct}>
        <FlatList
          data={dataProduct}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CardProduct data={item} />}
        />
      </View>
    </View>
  );
}
