import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
  },
});

export const checkoutApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CHECKOUT_API_URL,
});
