import axios from "axios";
const url = "http://localhost:3001";

const notesAPI = {
  getAllNotes: function(userId) {
    return axios.get(url + "/api/user/notes/" + userId, { withCredentials: true });
  },
  getStarredNotes: function(userId) {
    return axios.get(url + "/api/user/notes/starred/" + userId, { withCredentials: true });
  },
  searchNotes: function(query) {
    return axios.get(url + "/api/user/notes/search/q=" + query, { withCredentials: true });
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
};

export default notesAPI;