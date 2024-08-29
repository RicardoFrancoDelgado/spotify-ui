import { StatusBar } from 'expo-status-bar'
import GetStarted from './src/screens/GetStarted'
import Logon from './src/screens/Logon'

export default function App() {
  return (
    <>
      <Logon/>
      <StatusBar style="light" translucent />
    </>
  )
}
