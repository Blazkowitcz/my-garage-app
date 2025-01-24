import * as SecureStore from 'expo-secure-store';

const AuthUtil = {
    isAuthenticated: async () => {
        const storedToken = await SecureStore.getItemAsync('authToken');
        console.log(storedToken)
        return (!! storedToken && storedToken !== "");
    },
    setToken: async (token: string) => {

        await SecureStore.setItemAsync('authToken', token);
    }
};

export { AuthUtil };