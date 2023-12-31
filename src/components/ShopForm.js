import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native'

import { optionlist } from '../screens/utils/constants'

export default ShoppingForm = ({ handleSetSelected }) => {

  const [options, setOptions] = useState(optionlist)
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // Item is already selected, so remove it from the selectedItems array
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      handleSetSelected(selectedItems)
    } else {
      // Item is not selected, so add it to the selectedItems array
      setSelectedItems([...selectedItems, itemId]);
      handleSetSelected(selectedItems)
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          const isSelected = selectedItems.includes(item.title);
          return (
            <View>
              <TouchableOpacity
                style={[styles.card, { backgroundColor: isSelected ? "#00ff00" : item.color }]}
                onPress={() => handleItemPress(item.title)}
              >
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </TouchableOpacity>

              <View style={styles.cardHeader}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={[styles.title, { color: item.color }]}>{item.title}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
})