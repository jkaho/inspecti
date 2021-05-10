import axios from "axios";
const url = "http://localhost:3001";

const eventsAPI = {
  createEvent: function(eventData) {
    return axios.post(url + "/api/user/event", eventData, { withCredentials: true });
  },
  getAllEvents: function() {
    return axios.get(url + "/api/user/events", { withCredentials: true });
  },
  getDailySchedule: function(date) {
    return axios.get(url + "/api/user/events/daily/" + date, { withCredentials: true });
  }
};

export default eventsAPI;