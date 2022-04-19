import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TransparentCircleButton({name, color, hasMarginRight, onPress}) {
    return (
        <View
            style={[
                styles.iconButtonWrapper,
                hasMarginRight && styles.rightMargin,
            ]}>
            <Pressable
                style={({pressed}) => [
                    styles.iconButton,
                    Platform.OS === 'ios' &&
                        pressed && {
                            backgroundColor: '#EFEFEF',
                        },
                ]}
                onPress={onPress}
                android_ripple={{
                    color: '#EDEDED',
                }}>
                <Icon name={name} size={24} color={color} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightMargin: {
        marginRight: 8,
    },
});

export default TransparentCircleButton;
