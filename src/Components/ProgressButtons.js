import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ProgressButtons = ({ numScreens = 3}) => {
  const navigation = useNavigation();
  const currentScreenIndex = navigation.dangerouslyGetState().index;
  const progressItems = [];

  for (let i = 0; i < numScreens; i++) {
    progressItems.push(
      <View
        key={i}
        style={[
          styles.progressItem,
          i === currentScreenIndex ? styles.activeItem : styles.inactiveItem,
        ]}
      />
    );
  }

  return <View style={styles.progressBar}>{progressItems}</View>;
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeItem: {
    backgroundColor: 'orange', // Color del punto activo
  },
  inactiveItem: {
    backgroundColor: 'purple', // Color del punto inactivo
  },
});
