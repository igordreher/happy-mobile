import axios from 'axios'
import localHost from '../../localhost'

const api = axios.create({
    baseURL: `http://${localHost}:3333`
})

export default api