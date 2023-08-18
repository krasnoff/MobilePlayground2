import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import FadeInView from './FadeInView';

function MainMenu({ navigation }: any): JSX.Element {
  const rows = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      // icon: require('./assets/icon1.png'),
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      // icon: require('./assets/icon2.png'),
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      // icon: require('./assets/icon3.png'),
    },
    {
      title: 'Title 4',
      subtitle: 'Subtitle 4',
      // icon: require('./assets/icon4.png'),
    },
  ];

  const cols = [rows, rows];

  const closeHandler = () => {
    // Alert.alert('Close Here');
    navigation.goBack()
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {cols.map((colsItem, i) => (
          <View style={styles.column}>
            {colsItem.map((row, index) => (
              <View key={index} style={styles.row} accessible={true}>
                <FadeInView style={styles.boxedComponent} delay={(colsItem.length - index) * 500}>
                  <Text style={styles.title}>{row.title}</Text>
                  <Text style={styles.subtitle}>{row.subtitle}</Text>
                </FadeInView>
              </View>
            ))}
          </View>
        ))}
        
      </View>
      <View style={styles.closeButton}><Text onPress={() => closeHandler()}>Close</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  closeButton: {
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    margin: 10
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    rowGap: 10
  },
  row: {
    height: 'auto',
  },
  boxedComponent: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default MainMenu;