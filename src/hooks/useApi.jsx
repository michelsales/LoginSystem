import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API //fake
});

export const UseApi = () => ({
    validateToken : async (token) => { 
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        }
        //const response = await api.post('/validate', { token })
        //return response.data;
    },
    signIn : async (email, password) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        };
        //const response = await api.post('/signin', {email, password})
        //return response.data;
    },
    signOut: async () => { 
        return { status: true }
        //const response = await api.post('/signOut')
        //return response.data; 
    }
})

export default UseApi;