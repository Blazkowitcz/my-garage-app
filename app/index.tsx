import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Item } from '@/components';
import { useRouter } from 'expo-router';
import { ItemStyle } from "@/styles";
import { AuthUtil } from "@/utils/auth";

const newData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        brand: {
            name: 'Aprilia',
            color: '#e20714'
        },
        name: 'Dorsoduro',
        power: 950,
        year: 2020,
        picture: 'https://moto-station.com/wp-content/uploads/2020/11/17/APRILIA_DORSODURO_900_2021.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        brand: {
            name: 'BMW',
            color: '#096bb3'
        },
        name: 'GS',
        power: 1200,
        year: 2008,
        picture: 'https://www.motoplanete.com/bmw/zoom-700px/544-R-1200-GS-ADVENTURE-2006-1000px.webp'
    },
    // ... autres données
];

const App = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await AuthUtil.isAuthenticated();
            setIsAuthenticated(authStatus);

            if (!authStatus) {
                router.push({ pathname: '/authentication' });
            }
        };

        checkAuth();
    }, [router]);

    if (isAuthenticated === null) {
        // Affichage d'un écran de chargement pendant que la vérification de l'authentification se fait
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return <Main />;
};

const Main = () => {
    const router = useRouter();

    const handleItemPress = (bike: any) => {
        router.push({
            pathname: '/bike',
            params: { id: bike.id, name: bike.name, brand: bike.brand.name, power: bike.power, year: bike.year, picture: bike.picture },
        });
    };

    const handleAddPress = () => {
        console.log("Ajout");
    };

    return (
        <>
            <Text style={styles.title}>Mon Garage</Text>
            <FlatList
                data={newData}
                renderItem={({ item }) => (
                    <Item
                        power={item.power.toString()}
                        name={item.name}
                        brand={item.brand.name}
                        color={item.brand.color}
                        onPress={() => handleItemPress(item)}
                    />
                )}
                ListFooterComponent={
                    <Pressable onPress={() => handleAddPress()} style={({ pressed }) => [ItemStyle.item, pressed && { opacity: 0.5 }]}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>+</Text>
                    </Pressable>
                }
                keyExtractor={(item) => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: '2%',
        marginBottom: '2%',
    },
});

export default App;
