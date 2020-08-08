const { Schema, model } = require("mongoose");

const EventSchema = new Schema(
  {
    user:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    title: {
      type: String,
      trim: true,
    },
    startTime: {
      type: String,
      required: "Enter Event Start Time",
    },
    description: {
      type: String,
      trim: true,
    },
    Date: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const Event = model("Event", EventSchema);

module.exports = Event;
