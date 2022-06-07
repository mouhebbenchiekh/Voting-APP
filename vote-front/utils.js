import axios from "axios";

export const BASE_URL = process.env.API_LINK;

export const fetchUsers = async () => {
  try {
    return await axios.get(`${BASE_URL}subjects/Subjects`);
  } catch (e) {
    return [];
  }
};

export const login = async () => {
  try {
    return await axios.post(`${BASE_URL}user/login`, {
      email: "mouheb",
      password: "ss",
    });
  } catch (e) {
    return [];
  }
};
