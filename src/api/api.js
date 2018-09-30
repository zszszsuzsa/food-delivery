import axios from 'axios';

export default {
    getAll(){
        return axios.get(`http://localhost:8080/api/all`)
    },
    getCategoryNames(){
        return axios.get(`http://localhost:8080/categorynames`)
    },
    getMenuByCategory(category){
        return axios.get(`http://localhost:8080/api/category/${category}`)
    },
    getTopOrders(){
        return axios.get('http://localhost:8080/popular')
    },
    getSearchResult(keyword){
        return axios.get(`http://localhost:8080/search/${keyword}`)
    }
}