import axios from "axios";

export default {
  // get all users
  getUser: function () {
    return axios.get("/api/user");
  },
  //  create/post user
  createUser: function () {
    return axios.post("api/user");
  },
  // get all events from database
  getAllEvents: function () {
    return axios.get("api/events");
  },
  // find events using user id
  getEventsByUser: function (userId) {
    return axios.get("api/user/" + userId);
  },
  // create an event
  createEvent: function () {
    return axios.post("/api/events");
  },
  //   update existing event by using event id
  updateEvent: function (eventId) {
    return axios.put("api/events/" + eventId);
  },
  //   delete event by given id
  deleteEvent: function (eventId) {
    return axios.delete("/api/events/" + eventId);
  },
};
