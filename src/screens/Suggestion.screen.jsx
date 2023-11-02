import { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Art',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Business',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Biography',
  },
  {
    id: 'a1fb19f5-0db2-4da2-b522-59699162fcee',
    title: 'Comedy',
  },{
    id: '21aa7425-06c1-4b87-9b54-74441637e7e5',
    title: 'Culture',
  },{
    id: '38402f93-6345-41fd-9d58-9f9735dee48a',
    title: 'Education',
  },{
    id: '3ebd4f98-a8a2-47ed-8c4a-1990fbe39c0c',
    title: 'News',
  },{
    id: '08ab3c32-4cac-4748-b94b-e7b5358cb866',
    title: 'Philosophy',
  },{
    id: '1f2ad12f-dca0-4654-bb86-d006356b0955',
    title: 'Psychology',
  },{
    id: 'ed9be9e6-d448-401e-a025-c61a03a97861',
    title: 'Technology',
  },{
    id: 'fdc110bb-290b-49d9-bf89-de94a526485b',
    title: 'Travel',
  },
];

export const Suggestion = () => {
  const [text, onChangeText] = useState('');

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  )

  return (
    <View style={styles.containerScreen}>
      <View style={styles.container}>
        <View style={styles.containerCircles}>
          <View style={styles.bigCircle} />
          <View style={styles.circle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Tittle One</Text>
          <Text style={styles.paragraph}>Choose <Text style={styles.bold}>min. 3 topic </Text>you loke, we will give you more often that relate to it.</Text>
        </View>
        <View style={styles.suggestionContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Search Categories'
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.listContainer}>
            <FlatList 
              data={DATA}
              style={styles.list}
              renderItem={
                ({item}) => <Item title={item.title} />
              }
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGettingStarted}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '82%',
    gap: 20
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10
  },
  paragraph: {
    fontSize: 13,
    color: 'black'
  },
  buttonNext: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7
  },
  buttonText: {
    color: "white",
    textAlign: 'center',
    paddingVertical: 2,
    fontSize: 14
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
    top: -Dimensions.get('window').width/1.4,
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
    top: Dimensions.get('window').width/3,
    right: -Dimensions.get('window').width/8
  },
  containerCircles: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    zIndex: 0,
  },
  buttonGettingStarted: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7
  },
  textContainer: {
    position: 'absolute',
    zIndex: 10,
    top: Dimensions.get('window').height / 3.5,
    width: "80%"
  },
  bold: {
    fontWeight: 'bold'
  },
  item: {
  },
  itemTitle: {
    borderRadius: 7,
    borderWidth: 1,
    padding: 4,
    paddingHorizontal: 12,
  },
  list: {
    gap: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'black',
  },
  suggestionContainer: {
    flexDirection: 'column',
    width: '82%',
    gap: 20
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
  },
  listContainer: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  }
});
