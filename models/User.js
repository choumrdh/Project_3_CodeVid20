const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    userEmail: {
        type: String,
        match: [/.+\@.+\..+/, "email not valid"],
        required: [true, "User email is required"],
      },
      events:[{
          type: Schema.Types.ObjectId,
          ref:"Event"
      }],
      userCreated: {
        type: Date,
        default: Date.now(),
      },
});

  const User = model("User", UserSchema);

  module.exports = User;