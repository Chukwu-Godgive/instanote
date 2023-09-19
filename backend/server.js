/** InstaNote Application **/
// Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

// Set app to use some of the dependencies at initial
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cors());

/** Database start */
// mongoose.connect("mongodb://127.0.0.1:27017/instaNoteDB");
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
mongoose.connect(
  "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster1.7whv79o.mongodb.net/instaNoteDB"
);

// Database for Users
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  ref: String,
});
const User = mongoose.model("user", userSchema);

// Database for User Notes
const userNoteSchema = new mongoose.Schema({
  date: String,
  title: String,
  body: String,
  ref: String,
});
const Note = mongoose.model("note", userNoteSchema);
/** Database end */

/** API routes start */
// User main routes using chained method
const createUserRef =
  Math.random().toString().slice(2, 7) +
  Math.random().toString(36).slice(7, 12); // auto generate ids

  app.route("/api/user").post((req, res) => {
  const getUser = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    ref: createUserRef,
  });
  // saves the user inputs
  getUser
    .save()
    .then(res.send({ message: "Ok" }))
    .catch((err) => res.json({ error: err }));
});

// User sub routes using chained method
app
  .route("/api/user/:email")
  .get((req, res) => {
    User.findOne({ email: req.params.email })
      .then((user) => res.json(user))
      .catch((err) => res.json({ error: err }));
  })
  .patch((req, res) => {
    User.updateOne({ email: req.params.email }, { $set: req.body })
      .then((user) => res.json({ updated: user }))
      .catch((err) => res.json({ error: err }));
  })
  .delete((req, res) => {
    User.deleteOne({ email: req.params.email })
      .then((user) => res.json({ deleted: user }))
      .catch((err) => res.json({ error: err }));
  });

// Note main routes using chained method
app.route("/api/note").post((req, res) => {
  const getNote = Note({
    title: req.body.title,
    body: req.body.body,
  });
  // saves the user notes
  getNote
    .save()
    .then(res.send({ message: "Ok" }))
    .catch((err) => res.json({ error: err }));
});

// Note sub routes using chained method
app
  .route("/api/note/:_id")
  .get((req, res) => {
    Note.findOne({ _id: req.params._id })
      .then((notes) => res.json(notes))
      .catch((err) => res.json({ error: err }));
  })
  .patch((req, res) => {
    Note.updateOne({ _id: req.params._id }, { $set: req.body })
      .then((note) => res.json({ updated: note }))
      .catch((err) => res.json({ error: err }));
  })
  .delete((req, res) => {
    Note.deleteOne({ _id: req.params._id })
      .then((note) => res.json({ deleted: note }))
      .catch((err) => res.json({ error: err }));
  });

// Notes sub-sub routes using chained method
app
  .route("/api/notes/:ref")
  .get((req, res) => {
    Note.find({ ref: req.params.ref })
      .then((notes) => res.json(notes))
      .catch((err) => res.json({ error: err }));
  })
  .delete((req, res) => {
    Note.deleteMany({ ref: req.params.ref })
      .then((notes) => res.json({ deleted: notes }))
      .catch((err) => res.json({ error: err }));
  });
/** API routes end */

// Port
app.listen(process.env.PORT || process.env.LOCAL_PORT, () => {
  console.log("Server is up");
});
