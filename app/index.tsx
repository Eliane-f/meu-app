import { StatusBar } from 'expo-status-bar';
import StyledInput from '../components/input';
import { StyleSheet, Text, View, Image} from 'react-native';
import StyledButton from '../components/button';
import { router } from 'expo-router';

export default function Login() {

    const handleLogin = () => {
        router.replace('home')
    }
  return (
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./components/images/fatec-logo.png')}
      />
        <StyledInput placeholder ="E-mail"
            onChangeText={(text)=>console.log(text)}/>
        <StyledInput placeholder="Senha"
            onChangeText={(text) => console.log(text)} />
        <StyledButton text="Acessar o App"
            onClick={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,    
    height: 120,   
    marginBottom: 24,  
  },
});
