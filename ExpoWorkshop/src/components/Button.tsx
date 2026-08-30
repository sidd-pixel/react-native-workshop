import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, variant }: any) {
    return (
        <Pressable
            style={[
                styles.button,
                variant === 'primary' ? styles.primary : styles.secondary
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.text,
                    variant === 'primary'
                        ? styles.primaryText
                        : styles.secondaryText
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    primary: {
        backgroundColor: 'black'
    },
    primaryText: {
        color: 'white'
    },
    secondary: {
        backgroundColor: 'white',
        borderWidth: 1
    },
    secondaryText: {
        color: 'black'
    }
});