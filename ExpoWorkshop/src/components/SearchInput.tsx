import { TextInput, StyleSheet,View ,Text} from 'react-native';
import { useState } from 'react';

export default function SearchInput() {

    const [text,setText]=useState("");
    return (
        <View style={{width:'100%'}}>
        <TextInput
            style={styles.input}
            placeholder="Search..."
            //onChangeText={(text)=>console.log(text)}
            value={text}
            onChangeText={setText}
        />
        <Text>you typed: {text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 12,
        fontSize: 16
    }
});