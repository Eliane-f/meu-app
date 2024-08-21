import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet,Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./components/images/reactNative-logo.png')}
            />
            <text> React Native é um framework desenvolvido pelo Facebook para criar aplicativos móveis usando JavaScript e React. Ele permite o desenvolvimento de aplicativos nativos para Android e iOS com uma base de código compartilhada.    
            </text>
            <Image
                style={styles.logo}
                source={require('./components/images/Expo-logo.png')}
            />
            <text> Expo é um conjunto de ferramentas e serviços construídos em cima do React Native. Ele fornece uma configuração fácil e recursos adicionais para simplificar o desenvolvimento, como o Expo Go e o Expo SDK.   
            </text>
           
            <Text>Home</Text>
            <link href='/'>Voltar ao login </link>
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
    },
    logo: {
        width: 120,
        height: 120,  
        marginBottom: 24,  
    },
})