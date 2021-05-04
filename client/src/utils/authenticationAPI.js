import axios from "axios";
const url = "http://localhost:3001";

const authenticateAPI = {
  authenticated: function() {
    return axios.get(url + "/api/user/authenticated");
  },
};

export default authenticateAPI;