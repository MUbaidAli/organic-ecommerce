require("dotenv").config();
const express = require("express");
const testRoute = require("./routes/testRoute");
const connection = require("./connection/connect");
const User = require("./models/userModel");
const app = express();
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// database Connection
connection();

// PORT
const PORT = process.env.PORT || 5000;
// console.log(process.env.NODE_ENV);
// All API Routes
app.use("/", testRoute);
app.use("/api", userRoute);

// custom 404 Page Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

//Custom Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "something went wrong" } = err;
  if (process.env.NODE_ENV === "development") {
    // In development: show full error details
    return res.status(statusCode).json({
      success: false,
      message,
      stack: err.stack,
      error: err,
    });
  } else {
    // In production: show clean error
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("app is Listening to Port " + PORT);
});
