import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  perfil: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  title: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textWelcome: {
    color: 'black',
    fontSize: 25,
  },
  info: {
    flexDirection: 'row',
  },
  textFood: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textApp: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSearch: {
    padding: 30,
  },
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#DCDCDC',
  },
  icon: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 10,
    bottom: 12,
  },
  wrapperCardProduct: {
    margin: 10,
  },
  menu: {
    height: 50,
    width: 50,
  },
});
