import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
  Ubuntu_700Bold_Italic
} from '@expo-google-fonts/ubuntu'

import {Home} from '@/app/home';

export default function App(){

  const[fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  })

  if(!fontsLoaded){
    return
  }

  return <Home />
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
