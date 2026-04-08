import axios from 'axios'

export const publicInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const instance = axios.create({
    baseURL : 'http://127.0.0.1:8000/',
    timeout : 5000
})

export const loginUser = async (cred) =>{
    try{
        const response = await publicInstance.post('api/token/', cred)
        return response.data
    }
    catch (error) {
        throw error.response
    }
}

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem('access_token')

    if (token){
        request.headers['Authorization'] = `Bearer ${token}`
    }
    return request
})

instance.interceptors.response.use((response) => response, async(error) =>{
    const request = error.config
    if (error.response.status === 401 && !request._retry){
        request._retry = true
        const refreshToken = localStorage.getItem('refresh_token')

        if (refreshToken){
            try{
                const res = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh: refreshToken})
                
                if (res.status === 200){
                    localStorage.setItem('access_token', res.data.access)
                    request.headers['Authorization'] = `Bearer ${res.data.access}`
                    return instance(request)
                }
                    
            }
            catch (refreshError) {
                    localStorage.clear();
                    window.location.href = '/login';
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
})

