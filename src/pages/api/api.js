import axios from 'axios';

export async function registerAxios(values) {
    const {data} = await axios.post("/auth/register", {
        email: values.email,
        username: values.username,
        password: values.password
    })
    return data
}

export async function loginAxios(values) {
    const {data} = await axios.post('/auth/login', {
        email: values.email,
        username: values.username,
        password: values.password
    })
    return data
}