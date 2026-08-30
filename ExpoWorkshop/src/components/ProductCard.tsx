import { StyleSheet, Text, View,Image,Pressable } from 'react-native';

export default function ProductCard({ title, price,image,onPress }: any) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image 
                source={{uri:image}}
                style={styles.image}
                resizeMode='cover'
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>₹{price}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        padding: 16,
        marginVertical: 8,
        marginHorizontal:3,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        marginTop: 6,
        fontSize: 16
    },
    image: {
    width: '100%',
    height: 150,
    borderRadius: 8
    }
});