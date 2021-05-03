import axios from "axios";
const url = "http://localhost:3001";

const API = {
  signUpUser: function(userData) {
    return axios.post(url + "/api/user", userData);
  },
  getPropertyListings: function(query) {
    return axios.get(
      "https://api.domain.com.au/v1/listings/locations?terms=" + query,
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  }
};

export default API;