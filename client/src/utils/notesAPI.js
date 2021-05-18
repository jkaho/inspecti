import axios from "axios";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : ""

const notesAPI = {
  getAllNotes: function() {
    return axios.get(url + "/api/user/notes", { withCredentials: true });
  },
  getNotesWithReviews: function() {
    return axios.get(url + "/api/user/notes/reviews", { withCredentials: true });
  },
  getSharedNotes: function() {
    return axios.get(url + "/api/user/shared", { withCredentials: true });
  },
  getOneNote: function(noteId) {
    return axios.get(url + "/api/user/note/" + noteId, { withCredentials: true });
  },
  getStarredNotes: function(userId) {
    return axios.get(url + "/api/user/notes/starred/" + userId, { withCredentials: true });
  },
  searchNotes: function(query) {
    return axios.get(url + "/api/user/notes/search/q=" + query, { withCredentials: true });
  },
  searchNoteAddress: function(address) {
    return axios.get(url + "/api/user/notes/address/q=" + address, { withCredentials: true });
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