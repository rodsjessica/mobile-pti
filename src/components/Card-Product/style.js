import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    zIndex: 5,
    shadowOpacity: 0.7,
    shadowRadius: 1,
    shadowColor: '#C0C0C0',
  },
  infoProduct: {
    flexDirection: 'column',
  },
  product: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
  },
  calories: {
    flexDirection: 'row',
  },
  iconView: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  icon: {
    height: 20,
    width: 12,
  },
  imageProduct: {
    height: 80,
    width: '30%',
  },
  productCalories: {
    fontSize: 16,
    padding: 2,
  },
  price: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
});
