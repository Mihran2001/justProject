import axios from "axios";

export async function registerAxios(values) {
  const { data } = await axios.post("/auth/register", {
    email: values.email,
    username: values.username,
    password: values.password,
  });
  return data;
}

export async function loginAxios(values) {
  const { data } = await axios.post("/auth/login", {
    email: values.email,
    username: values.username,
    password: values.password,
  });
  return data;
}

export function tokenAxios() {
  const token = localStorage.getItem("access_token");
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = token;
    return config;
  });
}
