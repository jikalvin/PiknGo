import React, { useState } from 'react';
import { Button, CheckBox, Icon, Input, Layout, List } from '@ui-kitten/components';

const initialItems = [
  { name: 'Rice', selected: false },
  { name: 'Tomato', selected: false },
  // Add more initial items here
];

const ShoppingForm = () => {
  const [items, setItems] = useState(initialItems);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, { name: itemName, selected: false }]);
      setItemName('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].selected = !updatedItems[index].selected;
    setItems(updatedItems);
  };

  const renderItem = ({ item, index }) => (
    <Layout
      key={index}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      <CheckBox
        checked={item.selected}
        onChange={() => handleToggleItem(index)}
      />
      <Input value={item.name} disabled style={{ flex: 1, marginLeft: 8 }} />
      <Button
        appearance="ghost"
        status="danger"
        onPress={() => handleRemoveItem(index)}
      >
        <Icon name="trash-2-outline" />
      </Button>
    </Layout>
  );

  return (
    <Layout style={{ padding: 16 }}>
      <Input
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
        accessoryRight={(props) => (
          <Button appearance="ghost" status="basic" {...props}>
            <Icon name="plus-outline" />
          </Button>
        )}
        onSubmitEditing={handleAddItem}
      />
      <List
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Layout>
  );
};

export default ShoppingForm;
