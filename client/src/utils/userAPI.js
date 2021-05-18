import axios from "axios";
const url = "http://localhost:3001";

const API = {
  signUpUser: function(userData) {
    return axios.post("/api/user/signup", userData, { withCredentials: true });
  },
  logInUser: function(userData) {
    return axios.post("/api/user/login", userData, { withCredentials: true });
  },
  logOutUser: function() {
    return axios.get("/api/user/logout", { withCredentials: true });
  },
  getOneUser: function(userId) {
    return axios.get("/api/user/find/" + userId, { withCredentials: true })
  },
  getAllUsers: function() {
    return axios.get("/api/user/all", { withCredentials: true });
  },
};

export default API;