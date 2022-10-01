import axios from "axios";

axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

interface User {
  name: String;
  email: String;
  password: String;
  repeatPassword: String;
}

const USER_PATH_URL = "/user";

class UserService {
  getUserByEmail(email: String){
    return axios.get(USER_PATH_URL + `/${email}`);
  }
  loginUser(data: User) {
    return axios.post(USER_PATH_URL + "/login", data);
  }
  createNewUser(data: User) {
    return axios.post(USER_PATH_URL + "/create-user", data);
  }
  getUserPasswordByEmail(email: String) {
    return axios.get(USER_PATH_URL + `/forgot-password/${email}`);
  }
}

export default new UserService();
