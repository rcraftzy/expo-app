import React, { useRef, useState } from 'react';
import { View, Text, Button, ScrollView, Dimensions, StyleSheet } from 'react-native';

export const GettingStarted = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleSkip = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      scrollViewRef.current.scrollTo({ x: newPage * screenWidth, animated: true });
    }
  };

  const handleNext = () => {
    if (currentPage < 2) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      scrollViewRef.current.scrollTo({ x: newPage * screenWidth, animated: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const newPage = Math.floor(offset / screenWidth);
          setCurrentPage(newPage);
        }}
      >
        {/* Primera sección */}
        <View style={styles.slide}>
          <Text style={styles.text}>Contenido de la primera sección</Text>
        </View>

        {/* Segunda sección */}
        <View style={styles.slide}>
          <Text style={styles.text}>Contenido de la segunda sección</Text>
          <View style={styles.buttonContainer}>
            <Button title="Skip" onPress={handleSkip} />
            <Button title="Next" onPress={handleNext} />
          </View>
        </View>

        {/* Tercera sección */}
        <View style={styles.slide}>
          <Text style={styles.text}>Getting Started</Text>
          <Button title="Get Started" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
