import axios from "axios";
const url = "http://localhost:3001";

const reviewsAPI = {
  getAllReviews: function() {
    return axios.get(url + "/api/user/reviews", { withCredentials: true });
  },
  getReview: function(noteId) {
    return axios.post(url + "/api/user/review/" + noteId, { withCredentials: true });
  },
  createReview: function(noteId, reviewBody) {
    return axios.post(url + "/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
  updateReview: function(noteId, reviewBody) {
    return axios.put(url + "/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
};

export default reviewsAPI;