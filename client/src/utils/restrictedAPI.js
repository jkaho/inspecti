import axios from "axios";
const url = "http://localhost:3001";

const restrictedAPI = {
  toProfilePage: function() {
    return axios.get(url + "/api/profile");
  },
};

export default restrictedAPI;