import axios from "axios";
const url = "http://localhost:3001";

const eventsAPI = {
  createEvent: function(eventData) {
    return axios.post(url + "/api/user/event", eventData, { withCredentials: true });
  },
};

export default eventsAPI;