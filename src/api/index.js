import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5001/api";

export function saveToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
    return await axios.post("/auth", { email, password });
}

export async function register(newUserDetails) {
    return await axios.post(
        "/register",
        newUserDetails //need to send details separately?
    );
}

export const getProducts = async () => {
    return await axios.get("/items", {});
};