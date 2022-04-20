import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchContext from '../contexts/SearchContext';

function SearchScreen({navigation}) {
    const {keyword} = useContext(SearchContext);
    return (
        <View style={styles.block}>
            <Text>{keyword}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {},
});

export default SearchScreen;
