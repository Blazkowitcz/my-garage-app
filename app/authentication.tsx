import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AuthUtil } from "@/utils/auth";

export default function Authentication() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButtonPress = async () => {
        const response = await fetch('http://192.168.1.86:3000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const token = await response.json();
        await AuthUtil.setToken(token);
        router.push({ pathname: '/' });
    }

    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={styles.card_template}>
                <Text style={styles.title}>Authentification</Text>
                <TextInput value={email} onChangeText={setEmail} placeholder="Login" style={styles.input} />
                <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Password" style={[styles.input, styles.input_password]}  />
                <Pressable onPress={() => handleLoginButtonPress()}  style={({ pressed }) => [ styles.log_in_button, pressed && { opacity: 0.5 }]}>
                    <Text style={styles.log_in_button_text}>Log In</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Couleur de fond optionnelle
    },
    card_template: {
        flex: 0,
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20, // Ajout pour un meilleur rendu
        width: '90%', // Optionnel pour la largeur
    },
    input: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginStart: 20,
        marginEnd: 20,
        padding: 10, // Ajout pour un meilleur confort de saisie
    },
    input_password: {
        marginTop: 20,
        marginBottom: 20,
    },
    log_in_button: {
        backgroundColor: '#1859c9',
        width: '33%', // Augmente la largeur pour un meilleur rendu
        padding: 10, // Améliore l'espacement intérieur
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Centre le bouton dans son parent
        borderRadius: 5, // Ajoute un léger arrondi pour un design plus agréable
    },
    log_in_button_text: {
        textAlign: 'center',
        color: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: '2%',
        marginBottom: '2%',
    },
});