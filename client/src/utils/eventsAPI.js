import axios from "axios";
const url = "http://localhost:3001";

const eventsAPI = {
  createEvent: function(eventData) {
    return axios.post("/api/user/event", eventData, { withCredentials: true });
  },
  getAllEvents: function() {
    return axios.get("/api/user/events", { withCredentials: true });
  },
  getDailySchedule: function(startTime, endTime) {
    return axios.get("/api/user/events/" + startTime + "/" + endTime, { withCredentials: true });
  },
  updateEvent: function(eventId, updatedEvent) {
    return axios.put("/api/user/event/" + eventId, updatedEvent, { withCredentials: true });
  },
  deleteEvent: function(eventId) {
    return axios.delete("/api/user/event/" + eventId, { withCredentials: true });
  }
};

export default eventsAPI;