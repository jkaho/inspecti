import axios from "axios";
const url = "http://localhost:3001";

const authenticateAPI = {
  authenticated: function() {
    return axios.get("/api/user/authenticated", { withCredentials: true });
  },
};

export default authenticateAPI;