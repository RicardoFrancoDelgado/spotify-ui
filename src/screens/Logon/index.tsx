import { CaretLeft } from 'phosphor-react-native'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Spotify from '../../assets/Spotify.svg'
import Union from '../../assets/Union.png'
import UnionDown from '../../assets/Union1.png'
import Eilish from '../../assets/eilish.png'

export default function Logon() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBackButton}>
          <CaretLeft size={24} color="#DDDDDD" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Spotify width={235} height={71} />
        <Text style={styles.contentTitle}>Enjoy listening to music</Text>
        <Text style={styles.contentDescription}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider{' '}
        </Text>
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.contentButtonsRegister}>
            <Text style={styles.contentButtonsRegisterText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentButtonsSignIn}>
            <Text style={styles.contentButtonsSignInText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={Union}
          style={{ position: 'absolute', right: -13, top: -190 }}
        />
        <Image
          source={UnionDown}
          style={{ position: 'absolute', bottom: -440, left: 280 }}
        />
        <Image
          source={Eilish}
          style={{ position: 'absolute', left: -15, top: 350 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B'
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 30
  },
  headerBackButton: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.03);',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: 111,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 50
  },
  contentTitle: {
    marginTop: 55,
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#dadada',
    textAlign: 'center',
    lineHeight: 33
  },
  contentDescription: {
    marginTop: 21,
    fontSize: 17,
    fontWeight: '400',
    color: '#797979',
    textAlign: 'center',
    lineHeight: 23
  },
  contentButtons: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentButtonsRegister: {
    backgroundColor: '#42C83C',
    width: 147,
    height: 73,
    borderRadius: 30,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentButtonsRegisterText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700'
  },
  contentButtonsSignIn: {
    width: 147,
    height: 73,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentButtonsSignInText: {
    color: '#d7d7d7',
    fontSize: 19,
    fontWeight: '700'
  }
})
