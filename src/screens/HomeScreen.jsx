import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ route, navigation }) => {

    const { username } = route.params;

    const ITEMS = [
        { id: 1, backgroundColor: '#733737' },
        { id: 2, backgroundColor: '#a158b3' },
        { id: 3, backgroundColor: '#445696' },
        { id: 4, backgroundColor: '#26292c' },
        { id: 5, backgroundColor: '#112c31' },
        { id: 6, backgroundColor: '#5e5e5e' }
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    const onItemSelected = (selectedItem) => {

        const isSelected = selectedItems.some((items) => items.id == selectedItem.id);

        if (isSelected === false) {
            setSelectedItems([
                ...selectedItems,
                selectedItem
            ]);
        } else {
            setSelectedItems(
                selectedItems.filter(items => items.id !== selectedItem.id)
            );
        }
    }

    const onContinue = () => {
        navigation.navigate('Favorites', { items: selectedItems });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.headerText}>Home</Text>

            <Text style={styles.titleText}>Welcome,</Text>
            <Text style={styles.titleText}>{username}</Text>

            <Text style={styles.descriptionText}>Select colors;</Text>

            <View style={styles.colorItemContainer}>
                {ITEMS.map((item) =>
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.colorItem, { backgroundColor: item.backgroundColor }]}
                        onPress={() => onItemSelected(item)}>
                        {selectedItems.some((items) => items.id == item.id) && <FontAwesome5 name='check-circle' size={24} color='#FFF' style={styles.icon} />}
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={[styles.button, { opacity: selectedItems.length === 0 ? 0.5 : 1 }]}
                disabled={selectedItems.length === 0}
                onPress={() => onContinue()}
            >
                <Text style={styles.buttonText}>CONTINUE</Text>
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
    titleText: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 20
    },
    descriptionText: {
        color: '#FFF',
        fontWeight: '400',
        marginTop: 40,
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
    icon: {
        marginLeft: 10
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

export default HomeScreen;