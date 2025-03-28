import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GalleryItem = ({ item, onLongPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author} ({item.year})</Text>
      <TouchableOpacity onLongPress={onLongPress}>
        <Text style={styles.tooltip}>Long press for more info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  tooltip: {
    marginTop: 10,
    color: '#007bff',
  },
});

export default GalleryItem;
