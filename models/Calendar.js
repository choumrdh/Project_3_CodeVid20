const { Schema, model } = reuqire("mongoose");

const CalendarSchema = new Schema({
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
    },
    startTime: {
      type: Number,
      required: "Enter Event Time",
    },
    description: {
      type: String,
      trim: true,
    },
    Date: {
      type: Date
    },
  },
  {
    timeStamps: true,
  }
);
const Calendar = model("Calendar", CalendarSchema);

module.exports = Calendar;
