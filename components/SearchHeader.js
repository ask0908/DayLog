import React, {useContext} from 'react';
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

function SearchHeader() {
    const {width} = useWindowDimensions();
    const {keyword, onChangeText} = useContext(SearchContext);
    return (
        // 32를 뺀 이유 : 양 옆에 여백이 16씩 있기 때문
        <View style={[styles.block, {width: width - 32, height: 24}]}>
            <TextInput
                style={styles.input}
                placeholder="검색어를 입력하세요"
                value={keyword}
                onChangeText={onChangeText}
                autoFocus
            />
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && {opacity: 0.5},
                ]}
                onPress={() => onChangeText('')}>
                <Icon name="cancel" color="#9E9E9E" size={20} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    button: {
        marginLeft: 8,
    },
});

export default SearchHeader;
