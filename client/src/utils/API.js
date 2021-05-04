import axios from "axios";
const url = "http://localhost:3001";

const API = {
  signUpUser: function(userData) {
    return axios.post(url + "/api/user/signup", userData);
  },
  logInUser: function(userData) {
    return axios.post(url + "/api/user/login", userData);
  },
  logOutUser: function() {
    return axios.get(url + "/api/user/logout");
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