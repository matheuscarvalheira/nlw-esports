import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >
        Hello world
      </Text>
      <Button title="Send" />
      <Button title="Send" />
      <Button title="Send" />
      <Button title="Send" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
