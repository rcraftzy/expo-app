import { Card } from "@rneui/base"
import { Text, View } from "react-native"

export const ListPapers = () => {
  return (
    <View>
      <Text h4>List of Papers</Text>
      <Card>
        <Text h6>Title of Paper 1</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>
      <Card>
        <Text h6>Title of Paper 2</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>
    </View>
  )
}
