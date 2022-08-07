import axios from "axios";

const BASE_API_URL = 'http://127.0.0.1:8000/api';

export default {    
    APIPost:(link) => axios.post(`${BASE_API_URL}/${link}`),
    APIPostCheckOut:(link,value1,value2,value3,value4) => axios.post(`${BASE_API_URL}/${link}`,{params1: value1,params2:value2,params3: value3,params4: value4})
}