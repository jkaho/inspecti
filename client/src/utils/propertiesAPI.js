import axios from "axios";
const url = "http://localhost:3001";

const propertiesAPI = {
  getAllProperties: function() {
    return axios.get("/api/user/properties", { withCredentials: true });
  },
  getOneProperty: function(inspectedPropertyId) {
    return axios.get("/api/user/property/" + inspectedPropertyId, { withCredentials: true });
  },
  getPropertyNotes: function() {
    return axios.get("/api/user/property/notes", { withCredentials: true });
  },
  createProperty: function(propertyData) {
    return axios.post("/api/user/property", propertyData, { withCredentials: true });
  },
  updateProperty: function(inspectedPropertyId, propertyData) {
    return axios.put("/api/user/property/" + inspectedPropertyId, propertyData, { withCredentials: true });
  },
  deleteProperty: function(inspectedPropertyId) {
    return axios.delete("/api/user/property/" + inspectedPropertyId, { withCredentials: true });
  },
};

export default propertiesAPI;