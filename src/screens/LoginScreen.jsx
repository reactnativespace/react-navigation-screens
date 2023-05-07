import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = ({route, navigation}) => {

    const [username, setUsername] = useState('');


    const onLogin = () => {
        navigation.navigate('Home', {username: username})
    }

    return (
        <View style={styles.container}>

            <View style={styles.iconContainer}>
                <FontAwesome5 name='user-alt' size={80} color='#FFF' />
            </View>

            <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
                placeholder='Your name'
                placeholderTextColor='#FFF' />

            <TouchableOpacity
                disabled={username.length < 3}
                style={[styles.button, { opacity: username.length < 3 ? 0.5 : 1 }]}
                onPress={() => onLogin()}>
                <Text style={styles.buttonText}>ENTER</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#121212'
    },
    iconContainer: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#FFF',
        alignSelf: 'center'
    },
    textInput: {
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 40
    },
    button: {
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6D8AFE'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 16
    }
});

export default LoginScreen;