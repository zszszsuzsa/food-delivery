import axios from 'axios';

export default {
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
    },
    postCartContent(cart){
        return axios.post(`http://localhost:8080/orderdata`, cart)
    }
}