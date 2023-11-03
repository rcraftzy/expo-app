import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { ROUTES } from '../constants/navigation.constant'
import { GettingStarted, ListPapers, Suggestion } from '../screens'

const Stack = createStackNavigator()

const Navigation = () => <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen component={GettingStarted} name={ROUTES.gettingStarted} />
      <Stack.Screen component={Suggestion} name={ROUTES.suggestion} />
      <Stack.Screen component={ListPapers} name={ROUTES.listPapers} />
    </Stack.Navigator>
  </NavigationContainer>
export default Navigation

      // <Stack.Screen component={ListPapers} name={ROUTES.listPapers}>
      // </Stack.Screen>
      // <Stack.Screen component={SignUp} name={ROUTES.signUp}>
// </Stack.Screen>
