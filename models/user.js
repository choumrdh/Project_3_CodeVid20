const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
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
      required:[true, "Password is required"],
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

UserSchema.methods.generateHash = (password)=>{
  return bcrypt.hashSync(password, genSaltSync(8));
};

UserSchema.methods.validPassword = (inputPwd , dbPwd)=>{
  return bcrypt.compareSync(inputPwd, dbPwd);
};

const User = model("User", UserSchema);

module.exports = User;
