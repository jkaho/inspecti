import axios from "axios";
const url = "http://localhost:3001";

const propertiesAPI = {
  getAllProperties: function() {
    return axios.get(url + "/api/user/properties", { withCredentials: true });
  },
  createProperty: function(propertyData) {
    return axios.post(url + "/api/user/property", propertyData, { withCredentials: true });
  },
};

export default propertiesAPI;