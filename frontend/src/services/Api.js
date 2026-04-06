import axios from 'axios'

const publicInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/'
})

const instance = axios.create({
    baseURL : 'http://127.0.0.1:8000/',
    timeout : 5000
})

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem('access_token')

    if (token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export default instance