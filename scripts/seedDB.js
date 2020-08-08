const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/calendar", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    userEmail: "test@test.com",
    events:[{
      title: "Presentation",
      startTime: "10:00",
      description: "Class Presentation",
      Date: "08-12-2020",
    }],
    userCreated: new Date(Date.now()),
  },
  {
    userEmail: "fatso@test.com",
    events:[{
      title: "Feed Fatso",
      startTime: "09:30",
      description: "Feeding Fatso",
      Date: "08-11-2020",
    }],
    userCreated: new Date(Date.now()),
  },
];

db.User
.deleteOne({})
.then(()=>db.User.collection.insertMany(userSeed))
.then((data)=>{
  console.log(data.result.n + "records inserted!");
  process.exit(0);
}).catch(err=>{
  console.log(err)
  process.exit(1);
});

