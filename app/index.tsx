import React from 'react';
import {FlatList, Pressable, StyleSheet, Text} from 'react-native';
import { Item } from '@/components'
import { useRouter } from 'expo-router';
import {ItemStyle} from "@/styles";
import {BikeModel} from "@/models";

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
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        brand: {
            name: 'KTM',
            color: '#f27a27'
        },
        name: 'Adventure S',
        power: 1350,
        year: 2024,
        picture: 'https://moto-station.com/wp-content/uploads/2020/09/23/KTM_1290_SUPER_ADVENTURE_S_ORANGE_MY19_90_RIGHT_2020.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
        brand: {
            name: 'Harley-Davidson',
            color: '#fa8100'
        },
        name: 'Sportster',
        power: 1200,
        year: 2012
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        brand: {
            name: 'Harley-Davidson',
            color: '#fa8100'
        },
        name: 'Electra Glide',
        power: 1500,
        year: 2015
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ca',
        brand: {
            name: 'GasGas',
            color: '#e20714'
        },
        name: 'EC 2025',
        power: 300,
        year: 2005
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28cb',
        brand: {
            name: 'Husqvarna',
            color: '#143761'
        },
        name: 'FE',
        power: 250,
        year: 2001
    }
]

const App = () => {
    const router = useRouter();

    const handleItemPress = (bike: any) => {
        router.push({
            pathname: '/bike',
            params: { id: bike.id, name: bike.name, brand: bike.brand.name, power: bike.power, year: bike.year, picture: bike.picture },
        });
    };

    const handleAddPress = () => {
        console.log("Ajout")
    }

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
                    <Pressable onPress={() => handleAddPress()} style={({ pressed }) => [ ItemStyle.item, pressed && { opacity: 0.5 }]}>
                        <Text style={{textAlign: 'center', fontSize: 25}}>+</Text>
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