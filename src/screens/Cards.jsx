import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"

const Cards = () => {
  const route = useRoute()
  const { category } = route.params 

  return (
    <View>
      <Text>Category: {category.name}</Text>
    </View>
  )
}

export default Cards
