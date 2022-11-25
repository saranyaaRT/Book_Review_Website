const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const User = require("./models/User");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

uri = 'mongodb+srv://saranyaaRT:Saran2001@cluster0.om8afx9.mongodb.net/?retryWrites=true&w=majority'
// URL = 'mongodb+srv://saranyaa:saranyaa@cluster0.sxrwvov.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:true
    }).then(console.log('u did it'));
app.use(express.json());
app.use("/images/", express.static(path.join(__dirname, "/images")));

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);//hello.jpg
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload/", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
// app.post("/register", async (req, res) => {
//   try {
//     // const salt = await bcrypt.genSalt(10);
//     // const hashedPass = await bcrypt.hash(req.body.password, salt);
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//       // password: hashedPass,
//     });

//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);
app.use("/api/categories/", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
