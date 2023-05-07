import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const FavoritesScreen = ({ route, navigation }) => {

    const { items } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>FAVORITE COLORS</Text>
            <Text style={styles.descriptionText}>Your colors;</Text>

            <View style={styles.colorItemContainer}>
                {items.map((item) =>
                    <View
                        key={item.id}
                        style={[styles.colorItem, { backgroundColor: item.backgroundColor }]}>
                    </View>)}
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212'
    },
    headerText: {
        color: '#FFF',
        fontWeight: '800',
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    descriptionText: {
        color: '#FFF',
        fontWeight: '400',
        marginBottom: 10
    },
    colorItemContainer: {
        flex: 1
    },
    colorItem: {
        height: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
        marginBottom: 5,
        justifyContent: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 15,
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

export default FavoritesScreen;