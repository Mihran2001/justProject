import axios from "axios";

export const registerData = async (data) => {
  const response = await axios.post("/api/auth/register", {
    email: data.email,
    username: data.username,
    password: data.password,
  });
  return response;
};
