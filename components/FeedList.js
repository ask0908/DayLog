import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({logs, onScrolledToBottom, ListHeaderComponent}) {
    const onScroll = e => {
        // 함수가 없으면 아무것도 하지 않게 하는 예외처리
        if (!onScrolledToBottom) {
            return;
        }
        const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
        const distanceFromBottom =
            contentSize.height - layoutMeasurement.height - contentOffset.y;

        // 아이폰에서 계속 스크롤하면 FlatList의 바깥 부분이 스크롤되는 현상에 대한 예외처리
        // 스크롤되는 걸 막는 게 아닌 contentSize.height가 더 클 때만 작동하게 하는 것이다
        if (
            contentSize.height > layoutMeasurement.height &&
            distanceFromBottom < 72
        ) {
            onScrolledToBottom(true);
        } else {
            onScrolledToBottom(false);
        }
    };
    return (
        <FlatList
            data={logs}
            style={styles.block}
            renderItem={({item}) => <FeedListItem log={item} />}
            keyExtractor={log => log.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onScroll={onScroll}
            ListHeaderComponent={ListHeaderComponent}
        />
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#E0E0E0',
        height: 1,
        width: '100%',
    },
});

export default FeedList;
