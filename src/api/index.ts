import axios from "axios";
import {
  HealthCheckResponse,
  LoginParams,
  LoginResponse,
  RegisterParams,
  RegisterResponse,
} from "./type";

const BASE_API_URL = "https://node-server-deployment.onrender.com/";
const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const BACKEND_API = axios.create({
  baseURL: BASE_API_URL,
});

const DICTIONARY_API = axios.create({
  baseURL: DICTIONARY_API_URL,
});

export const checkHealth = () => {
  return BACKEND_API.get<HealthCheckResponse>(`${BASE_API_URL}`);
};

export const registerApi = (data: RegisterParams) => {
  return BACKEND_API.post<RegisterResponse>(`${BASE_API_URL}/register`, data);
};

export const loginApi = (data: LoginParams) => {
  return BACKEND_API.post<LoginResponse>(`${BASE_API_URL}/login`, data);
};

export const getDefinitionApi = (word: string) => {
  return DICTIONARY_API.get(`${DICTIONARY_API_URL}/${word}`);
};

// Promise: variable for future value
// Pending Resolve Reject

// axios.interceptor
BACKEND_API.interceptors.request.use((config) => {
  console.log("config", config);
  return config;
});
