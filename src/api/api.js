import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost.5000'
})

export const search = async() => {
    // const response = api.get(url)
    // setData(response.data)
}