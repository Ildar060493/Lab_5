import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    {
      title: 'Mona Lisa',
      author: 'Leonardo da Vinci',
      year: 1503,
      imageUrl: 'https://example.com/monalisa.jpg',
    },
    {
      title: 'Starry Night',
      author: 'Vincent van Gogh',
      year: 1889,
      imageUrl: 'https://example.com/starrynight.jpg',
    },
    // Добавьте еще элементы
  ];

  const nextItem = () => {
    if (currentIndex < artworks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showMoreInfo = () => {
    const item = artworks[currentIndex];
    Alert.alert('More Info', `${item.title} by ${item.author} (${item.year})`);
  };

  return (
    <View style={styles.container}>
      <GalleryItem item={artworks[currentIndex]} onLongPress={showMoreInfo} />
      <View style={styles.buttonsContainer}>
        <Button title="Previous" onPress={previousItem} disabled={currentIndex === 0} />
        <Button title="Next" onPress={nextItem} disabled={currentIndex === artworks.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Gallery;
