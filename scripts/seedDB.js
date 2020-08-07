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
    password: "P@ssword",
    evnets:[{
      title: "Presnetation",
      startTime: 8,
      description: "Class Presentation",
      Date: new Date ("2020-08-12"),
    }],
    userCreated: new Date(Date.now()),
  },
  {
    userEmail: "fatso@test.com",
    password: "P@ssword",
    evnets:[{
      title: "Feed Fatso",
      startTime: 12,
      description: "Feeding Fatso",
      Date: new Date ("2020-08-12"),
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

