const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
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
      events:[{
          type: Schema.Types.ObjectId,
          ref:"Event"
      }],
      userCreated: {
        type: Date,
        default: Date.now(),
      },
});


UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, genSaltSync(8));
  };
  
  UserSchema.methods.validPassword = (inputPwd, dbPwd) => {
    return bcrypt.compareSync(inputPwd, dbPwd);
  };

  const User = model("User", UserSchema);

  module.exports = User;