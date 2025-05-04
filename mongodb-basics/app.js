const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://bernardansah5:2lVYgoos2XnuXibn@cluster0.w7wy6vf.mongodb.net/"
).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create a new document
    const newUser = await User.create({
      name: "Bernard Ansah",
      email: "ben@gmail.com",
      age: "30",
      isActive: true,
      tags: ["developer", "designer", "manager"],
    })

    console.log('Created new user ->', newUser);

    const allUsers = await User.find({});
    console.log('All users ->', allUsers);
    
  } catch (error) {
    console.log('Error ->', e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();