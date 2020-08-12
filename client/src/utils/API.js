import axios from "axios";

export default {
  // get all users
  getAllUser: function () {
    return axios.get("/api/user");
  },
  // find User in database
  findUser: function (userId) {
    return axios.get("/api/user/" + userId)
  },
  //  create/post user
  createUser: function (userData) {
    return axios.post("api/user", userData);
  },
  // get all events from database
  getAllEvents: function () {
    return axios.get("api/events");
  },
  // find events using user id
  getEventsByUser: function (userId) {
    return axios.get("api/user/events" + userId);
  },

  getUpcomingEventsByDates: function (dates, email) {
    return axios.post("api/events/upcoming", { dates, email });
  },
  // create an event
  createEvent: function (newUser) {
    console.log(newUser);
    return axios.post("/api/events", newUser);
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
