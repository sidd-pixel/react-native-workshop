
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState, useEffect } from 'react';

export default function ProductDetailsScreen() {
    const [product, setProduct] = useState<any>(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');

    const { id } = useLocalSearchParams();

    // const fetchProduct = async () => {
    //     const response = await fetch(
    //         `https://dummyjson.com/products/${id}`
    //     );

    //     const data = await response.json();

    //     setProduct(data);
    // };

    const fetchProduct = async () => {
    try {
        setLoading(true);
        setError('');

        const response = await fetch(
            `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        const data = await response.json();

        setProduct(data);
        } catch (error) {
            setError('Failed to load product');
        } finally {
            setLoading(false);
        }
        };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading) {
    return (
        <View style={styles.loadingContainer}>
            <Text>Loading product...</Text>
        </View>
    );
}

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading product...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={styles.backText}>← Back</Text>
            </Pressable>

            <View style={styles.card}>

                <Image
                    source={{ uri: product.thumbnail }}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    {product.title}
                </Text>

                <Text style={styles.price}>
                    ₹{product.price}
                </Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backButton: {
        marginBottom: 15
    },

    backText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 15
    },

    image: {
        width: '100%',
        height: 250
    },

    title: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold'
    },

    price: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    description: {
        marginTop: 15,
        fontSize: 16,
        lineHeight: 24
    }
});
