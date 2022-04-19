import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingWriteButton() {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Write');
    };
    return (
        <View style={styles.wrapper}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    Platform.OS === 'ios' && {
                        opacity: pressed ? 0.6 : 1,
                    },
                ]}
                android_ripple={{color: 'white'}}
                onPress={onPress}>
                <Icon name="add" size={24} style={styles.icon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        // iOS 전용 그림자 설정
        shadowColor: '#4D4D4D',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // 안드로이드 전용 그림자 설정
        elevation: 5,
        // 안드에서 물결 효과가 영역 밖으로 안 나가게 설정
        // iOS에선 overflow: hidden일 경우 그림자가 표시되지 않음
        overflow: Platform.select({
            android: 'hidden',
        }),
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#009682',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
    },
});

export default FloatingWriteButton;
