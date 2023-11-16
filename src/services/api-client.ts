import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2c39f707989d46928fdf0bb8a48bab0c'
    }
});