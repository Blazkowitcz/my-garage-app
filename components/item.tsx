import { BikeModel } from "@/models";
import { Text, View, Pressable } from "react-native";
import { ItemStyle } from '@/styles';

const Item = ({ brand, name, power, color, onPress }: BikeModel & { onPress: () => void }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [ ItemStyle.item, {backgroundColor: color} , pressed && { opacity: 0.5 }]}>
            <Text style={ItemStyle.brand}>{brand} {name}</Text>
            <Text style={ItemStyle.type}>{power}cc</Text>
        </Pressable>
    );
};

export default Item;