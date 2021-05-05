import axios from "axios";
const url = "http://localhost:3001";

const notesAPI = {
  getAllNotes: function(userId) {
    return axios.get(url + "/api/user/notes", userId, { withCredentials: true })
  },
  createNote: function(noteData) {
    return axios.post(url + "/api/user/note", noteData, { withCredentials: true });
  },
  updateNote: function(updatedData) {
    return axios.put(url + "/api/user/note", updatedData, { withCredentials: true });
  },
  deleteNote: function(noteId) {
    return axios.delete(url + "/api/user/note/" + noteId, { withCredentials: true });
  }
};

export default notesAPI;