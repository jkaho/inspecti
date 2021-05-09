import axios from "axios";
const url = "http://localhost:3001";

const notesAPI = {
  getAllNotes: function(userId) {
    return axios.get(url + "/api/user/notes/" + userId, { withCredentials: true });
  },
  getStarredNotes: function(userId) {
    return axios.get(url + "/api/user/notes/starred/" + userId, { withCredentials: true });
  },
  searchNotes: function(userId, query) {
    return axios.get(url + "/api/user/notes/search/" + userId + "/q=" + query, { withCredentials: true });
  },
  createNote: function(noteData) {
    return axios.post(url + "/api/user/note", noteData, { withCredentials: true });
  },
  updateNote: function(noteId, updatedData) {
    return axios.put(url + "/api/user/note/" + noteId, updatedData, { withCredentials: true });
  },
  deleteNote: function(noteId) {
    return axios.delete(url + "/api/user/note/" + noteId, { withCredentials: true });
  },
  getAddressSuggestions: function(query) {
    return axios.get("https://api.domain.com.au/v1/properties/_suggest?terms=" + query + "&channel=Residential",
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  },
  getPropertyInfo: function(propertyId) {
    return axios.get("https://api.domain.com.au/v1/properties/" + propertyId,
      { 
        headers: {
          "X-Api-Key": "key_dc635e3e95b67de404f3b44abbcc09e2"
        }
      }
    );
  }
};

export default notesAPI;