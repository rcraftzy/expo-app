import { View, StyleSheet } from 'react-native';

export const ProgressButtons = ({ numScreens = 3, currentPage }) => {
  const progressItems = [];

  for (let i = 0; i < numScreens; i++) {
    progressItems.push(
      <View
        key={i}
        style={[
          styles.progressItem,
          i === currentPage ? styles.activeItem : styles.inactiveItem,
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
    marginVertical: 30
  },
  progressItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  activeItem: {
    backgroundColor: 'orange' // Color del punto activo
  },
  inactiveItem: {
    backgroundColor: 'purple' // Color del punto inactivo
  },
});
