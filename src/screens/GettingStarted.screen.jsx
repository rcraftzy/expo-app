import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { ProgressButtons } from '../Components/ProgressButtons';
import { Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const GettingStarted = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const navigation = useNavigation()

  const handleSkip = () => {
    if (currentPage > 0) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      scrollViewRef.current.scrollTo({ x: newPage * screenWidth, animated: true });
    }
    else if (currentPage === 0) {
      const newPage = currentPage + 2;
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

  const handleGettingStarted = () => {
    navigation.navigate('Suggestion');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
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
          <View style={styles.containerCircles}>
            <View style={styles.bigCircle} />
            <View style={styles.circle} />
          </View>
          <HeaderGettingStarted title="Tittle One" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
          <ProgressButtons numScreens={3} currentPage={currentPage}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonSkip} onPress={handleSkip}>
              <Text style={styles.buttonText1}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
              <Text style={styles.buttonText2}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Segunda sección */}
        <View style={styles.slide}>
          <HeaderGettingStarted title="Tittle Two" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
          <ProgressButtons numScreens={3} currentPage={currentPage}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonSkip} onPress={handleSkip}>
              <Text style={styles.buttonText1}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
              <Text style={styles.buttonText2}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tercera sección */}
        <View style={styles.slide}>
          <View style={styles.containerCircles}>
            <View style={styles.bigCircle} />
            <View style={styles.circle} />
          </View>
          <HeaderGettingStarted title="Tittle Three" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
          <ProgressButtons numScreens={3} currentPage={currentPage}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonGettingStarted} onPress={handleGettingStarted}>
              <Text style={styles.buttonText2}>Lets Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const HeaderGettingStarted = ({title, paragraph}) => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={styles.containerImage}>
        <Image style={styles.image} source={require('../../assets/images/getting-started3.png')}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '82%',
    height: 'auto',
    aspectRatio: 1
  },
  text: {
    fontSize: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '82%',
    justifyContent: 'space-between',
    gap: 20
  },
  headerContainer: {
    width: '82%'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10
  },
  paragraph: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center'
  },
  buttonNext: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7
  },
  buttonSkip: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 7
  },
  buttonText1: {
    color: 'purple',
    fontSize: 14,
    paddingVertical: 2,
    textAlign: 'center'
  },
  buttonText2: {
    color: "white",
    textAlign: 'center',
    paddingVertical: 2,
    fontSize: 14
  },
  buttonGettingStarted: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7
  },
  bigCircle: {
    position: 'absolute',
    width: Dimensions.get('window').width*1.2,
    height: Dimensions.get('window').width*1.2,
    borderRadius: Dimensions.get('window').width*1.2,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 60,
    zIndex: 10,
    top: -Dimensions.get('window').width/2,
    left: -Dimensions.get('window').width/1.6,
  },
  circle: {
    position: 'absolute',
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    borderRadius: Dimensions.get('window').width/3,
    marginHorizontal: 5,
    backgroundColor: 'purple',
    zIndex: 10,
    top: Dimensions.get('window').width/2,
    right: -Dimensions.get('window').width/8
  },
  containerCircles: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    zIndex: 0,
  },
  containerImage: {
    justifyContent: 'center', // Centrar horizontalmente
    alignItems: 'center', 
  }
});
