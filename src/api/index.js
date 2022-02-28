import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001/api";

export function saveToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
    return await axios.post("/auth", { email, password });
}

export async function register(newUserDetails) {
    const response = await axios.post("/register", newUserDetails);
    saveToken(response.data.token);
    return response;
}

export async function getUserData() {
    return await axios.get("/me");
}

export async function authenticate(email, password) {
    const tokenResponse = await axios.post("/auth", { email, password });
    saveToken(tokenResponse.data.token);

    const userDetailsResponse = await axios.get("/me");
    return userDetailsResponse.data;
}

export async function getData() {
    return await axios.get("/items");
}
export async function fetchMore(page) {
    return await axios.get(`/items?page=${page}`, {});
}
export async function getSkateboards() {
    return await axios.get("/items?category=skateboard", {});
}
export async function getMoreSkateboards(page) {
    return await axios.get(`/items?category=skateboard&page=${page}`, {});
}
export async function getClothes() {
    return await axios.get(
        "items?category=hoodie&category=tshirt&category=socks",
        {}
    );
}
export async function getMoreClothes(page) {
    return await axios.get(
        `items?category=hoodie&category=tshirt&category=socks&page=${page}`,
        {}
    );
}
export async function getAccessories() {
    return await axios.get("items?category=totebag&category=wheel", {});
}
export async function getMoreAccessories(page) {
    return await axios.get(
        `items?category=totebag&category=wheel&page=${page}`,
        {}
    );
}

export async function fetchData(id) {
    return await axios.get(`/items/${id}`);
}


export async function OrderHistoryData(){
    return await axios.get('/orders')
}

export function clearToken() {
    axios.defaults.headers.common["Authorization"] = "";
}

