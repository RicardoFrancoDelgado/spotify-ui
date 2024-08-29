import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import billie from '../../assets/billie.png'
import Spotify from '../../assets/Spotify.svg'

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Image source={billie} style={styles.imageApp} />
      <Spotify style={{ marginTop: 42 }} width={192} height={59} />
      <View style={styles.content}>
        <Text style={styles.titleContent}>Enjoy listening to music</Text>
        <Text style={styles.descriptionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim
          purus sed phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0c0c',
    alignItems: 'center'
  },
  imageApp: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  content: {
    top: 450,
    paddingHorizontal: 53,
    alignItems: 'center'
  },
  titleContent: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#dadada',
    textAlign: 'center',
    lineHeight: 33
  },
  descriptionContent: {
    marginTop: 21,
    fontSize: 17,
    fontWeight: '400',
    color: '#797979',
    textAlign: 'center',
    lineHeight: 23
  },
  button: {
    width: 329,
    height: 92,
    backgroundColor: '#42C83C',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 37
  },
  buttonTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f6f6f6',
    lineHeight: 30
  }
})
