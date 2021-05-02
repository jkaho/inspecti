import axios from "axios";

const API = {
  signUpUser: function(userData) {
    return axios.post("/api/user", userData);
  },
};

export default API;