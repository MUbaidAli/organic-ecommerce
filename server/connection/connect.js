const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected ");
  } catch (error) {
    console.log("error in Database Connection " + error.message);
    process.exit(1);
    // throw new Error()
  }
}

module.exports = connection;
