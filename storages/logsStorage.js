import AsyncStorage from '@react-native-community/async-storage';

const KEY = 'logs';

const logsStorage = {
    async get() {
        try {
            const raw = await AsyncStorage.getItem(KEY);
            const parsed = JSON.parse(raw);
            return parsed;
        } catch (error) {
            throw new Error('Failed to load logs');
        }
    },
    async set(data) {
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(data));
        } catch (error) {
            throw new Error('Failed to save logs');
        }
    },
};

export default logsStorage;
