import axios from "axios";

axios.defaults.baseURL='http://sinus'

export function saveToken(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  
  export async function login(email, password){
    return await axios.post('/auth', {email,password})
  }
  