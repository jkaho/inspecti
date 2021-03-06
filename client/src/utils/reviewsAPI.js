import axios from "axios";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : ""

const reviewsAPI = {
  getAllReviews: function() {
    return axios.get(url + "/api/user/reviews", { withCredentials: true });
  },
  getReview: function(noteId) {
    return axios.get(url + "/api/user/review/" + noteId, { withCredentials: true });
  },
  createReview: function(noteId, reviewBody) {
    return axios.post(url + "/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
  updateReview: function(noteId, reviewBody) {
    return axios.put(url + "/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
  deleteReview: function(noteId) {
    return axios.delete(url + "/api/user/review/" + noteId, { withCredentials: true });
  },
};

export default reviewsAPI;