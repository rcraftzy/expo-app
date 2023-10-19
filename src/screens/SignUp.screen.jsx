// import { useRoute } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { GoogleIcon } from "../Components/GoogleIcon"

export const SignUp = ({ promptAsync }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.appName}>Name<Text style={styles.purpleText}>App</Text></Text>
      <View style={styles.containerParagraph}>
        <Text style={styles.paragraph}>
          Stay informated with personalized <Text style={styles.orangeText}>alerts!</Text>
        </Text>
        <Text style={styles.paragraph}>
          Set <Text style={styles.orangeText}>keywords</Text>, get notified, Sing in to Control your updates
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
        <View style={styles.buttonContent}>
          <View style={styles.googleIcon}>
          </View>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  purpleText: {
    color: 'purple',
  },
  orangeText: {
    color: 'orange',
  },
  containerParagraph: {
    width: '70%',
    marginTop: 20,
    marginBottom: 80,
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
  },
  button: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row', // Alinea la imagen y el texto en la misma fila
    alignItems: 'center', // Centra verticalmente el contenido del botón
    justifyContent: 'center', // Centra horizontalmente el contenido del botón
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'black', // Cambia el color de acuerdo a tu diseño
  },
  googleIcon: {
    height: 20,
    width: 20
  }
})

