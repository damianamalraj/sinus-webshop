import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001/api";

export function saveToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
    return await axios.post("/auth", { email, password });
}

export async function register(newUserDetails){
    const response = await axios.post('/register',newUserDetails)
    saveToken(response.data.token)
    return response
}

export async function getUserData(){
    return await axios.get('/me')
}

export async function authenticate(email, password){
    const tokenResponse = await axios.post('/auth', { email, password })
    saveToken(tokenResponse.data.token)

    const userDetailsResponse = await axios.get('/me')
    return userDetailsResponse.data
}

export async function getData() {
    return await axios.get("/items");
}
export async function fetchMore(page) {
    return await axios.get(`/items?page=${page}`, {});
}

export async function fetchData(id) {
    return await axios.get(`/items/${id}`);
}

export const getProducts = async () => {
    return await axios.get("/items", {});
};

export async function OrderHistoryData(){
    return await axios.get('/orders')
}

export function clearToken() {
    axios.defaults.headers.common["Authorization"] = ""
}