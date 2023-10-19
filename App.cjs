import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google';
import { SignUp } from './src/screens';
import React from 'react';
import { 
  GoogleAuthProvider, 
  signInWithCredential,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase.config';
import Navigation from './src/Wrappers/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '1059676842481-ld7flblvfacj6t4gbohc035t810tbeou.apps.googleusercontent.com',
    iosClientId: '1059676842481-9deh9omot26lt6kp4j895guohip3d7k7.apps.googleusercontent.com',
    androidClientId: '1059676842481-e7n9515v4j4vie40iep1ovv8rod7i1h1.apps.googleusercontent.com',
  })

  const getLocalUser = async () => {
    try {
      setLoading(true)
      const userJSON = await AsyncStorage.getItem('user')
      const userData = userJSON ? JSON.parse(userJSON) : null
      setUserInfo(userData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])
  React.useEffect(() => {
    getLocalUser()
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return console.log('no user')
      console.log('user')      
      await AsyncStorage.setItem('user', JSON.stringify(user))
      setUserInfo(user)
    })
    return () => unsubscribe()
  }, [])

  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>

  )
  return userInfo ? <Navigation /> : <SignUp promptAsync={promptAsync} />
}
