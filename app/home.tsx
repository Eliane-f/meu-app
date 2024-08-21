import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet,Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    style={styles.logo}
                    source={require('../components/images/reactNative-logo.png')}
                />
                <Text>React Native é um framework desenvolvido pelo Facebook para criar aplicativos móveis usando JavaScript e React. Ele permite o desenvolvimento de aplicativos nativos para Android e iOS com uma base de código compartilhada.</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.logo}
                    source={require('../components/images/Expo-logo.png')}
                />
                <Text> Expo é um conjunto de ferramentas e serviços construídos em cima do React Native. Ele fornece uma configuração fácil e recursos adicionais para simplificar o desenvolvimento, como o Expo Go e o Expo SDK.</Text>
            </View>
            
            
           
            
            <Text>Login com sucesso!</Text>
            <Link href='/'>Voltar para home</Link>
        
            <StatusBar style="auto" />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    logo: {
        width: 150,
        height: 150,  
        margin: 5,  
        resizeMode: 'contain',
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20, 
        padding: 50,
      },
})