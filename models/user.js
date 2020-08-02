const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    _id: Schema.types.ObjectId,
    //   username: {
    //     type: String,
    //     require: [true, "Username is required"],
    //     trim: true,
    //   },
    userEmail: {
      type: String,
      match: [/.+\@.+\..+/, "email not valid"],
      required: [true, "User email is required"],
    },
    password: {
      type: String,
      minlength: [7, "Too short password"],
      trim: true,
    },
    calendar: { 
        type: Schema.Types.ObjectId, 
        ref: "Calendar" 
    },
    userCreated:{
        type:Date,
        default:Date.now()
    }
  }
);

const User = model("User", UserSchema);

module.exports = User;
