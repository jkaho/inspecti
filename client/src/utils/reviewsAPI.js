import axios from "axios";
const url = "http://localhost:3001";

const reviewsAPI = {
  getAllReviews: function() {
    return axios.get("/api/user/reviews", { withCredentials: true });
  },
  getReview: function(noteId) {
    return axios.get("/api/user/review/" + noteId, { withCredentials: true });
  },
  createReview: function(noteId, reviewBody) {
    return axios.post("/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
  updateReview: function(noteId, reviewBody) {
    return axios.put("/api/user/review/" + noteId, reviewBody, { withCredentials: true });
  },
  deleteReview: function(noteId) {
    return axios.delete("/api/user/review/" + noteId, { withCredentials: true });
  },
};

export default reviewsAPI;