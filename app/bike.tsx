import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Icon } from '@rneui/themed';

export default function Detail() {
    const { id, name, brand, power, year, picture } = useLocalSearchParams();

    const router = useRouter();

    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => { router.back()}}>
                    <Icon name='arrow-back' style={styles.back} />
                </TouchableOpacity >
                <Text style={styles.title}>{brand} {name}</Text>
            </View>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: picture }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    title: {
        flex: 1, // Prend tout l'espace horizontal disponible
        textAlign: 'center',
        fontSize: 30,
        marginTop: '2%',
        marginBottom: '2%',
    },
    back: {
        marginTop: 15,
    }
});