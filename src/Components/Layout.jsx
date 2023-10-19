import { Text, View } from "react-native"
import { ProgressButtons } from "./ProgressButtons"

export const Layout = ({ children, title, paragraph }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{paragraph}</Text>
      <ProgressButtons />
      {children}
    </View>
  )
}
