import axios from "axios";
const url = "http://localhost:3001";

const propertiesAPI = {
  getAllProperties: function() {
    return axios.get(url + "/api/user/properties", { withCredentials: true });
  },
  getPropertyNotes: function(query) {
    return axios.get(url + "/api/user/property/notes/q=" + query, { withCredentials: true });
  },
  createProperty: function(propertyData) {
    return axios.post(url + "/api/user/property", propertyData, { withCredentials: true });
  },
};

export default propertiesAPI;