const { Schema, model } = require("mongoose");

const CalendarSchema = new Schema(
  {
    userEmail: {
      type: String,
      match: [/.+\@.+\..+/, "email not valid"],
      required: [true, "User email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [7, "Too short password"],
      trim: true,
    },
    calendar: [
      {
        title: {
          type: String,
          trim: true,
        },
        startTime: {
          type: Number,
          required: "Enter Event Start Time",
        },
        description: {
          type: String,
          trim: true,
        },
        Date: {
          type: Date,
        },
      },
    ],
    userCreated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timeStamps: true,
  }
);

UserSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, genSaltSync(8));
};

UserSchema.methods.validPassword = (inputPwd, dbPwd) => {
  return bcrypt.compareSync(inputPwd, dbPwd);
};
const Calendar = model("Calendar", CalendarSchema);

module.exports = Calendar;
