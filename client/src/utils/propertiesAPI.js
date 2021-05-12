import axios from "axios";
const url = "http://localhost:3001";

const propertiesAPI = {
  getAllProperties: function() {
    return axios.get(url + "/api/user/properties", { withCredentials: true });
  },
  getPropertyNotes: function() {
    return axios.get(url + "/api/user/property/notes", { withCredentials: true });
  },
  createProperty: function(propertyData) {
    return axios.post(url + "/api/user/property", propertyData, { withCredentials: true });
  },
  updateProperty: function(inspectedPropertyId, propertyData) {
    return axios.put(url + "/api/user/property/" + inspectedPropertyId, propertyData, { withCredentials: true });
  },
  deleteProperty: function(inspectedPropertyId) {
    return axios.delete(url + "/api/user/property/" + inspectedPropertyId, { withCredentials: true });
  },
};

export default propertiesAPI;