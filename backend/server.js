/** InstaNote Application **/
// Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

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
});
const User = mongoose.model("user", userSchema);

// Database for User Notes
const userNoteSchema = new mongoose.Schema({
  title: String,
  body: String,
  user_id: String,
});
const Note = mongoose.model("note", userNoteSchema);
/** Database end */

/** API routes start */
// User main routes using chained method
app.route("/api/user").post((req, res) => {
  const getUser = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  // saves the user inputs
  getUser
    .save()
    .then(res.send({ message: "Ok" }))
    .catch((err) => res.send({ error: err }));
});

// User sub routes using chained method
app
  .route("/api/user/:email")
  .get((req, res) => {
    User.findOne({ email: req.params.email })
      .then((user) => res.send(user))
      .catch((err) => res.send({ error: err }));
  })
  .patch((req, res) => {
    User.updateOne({ email: req.params.email }, { $set: req.body })
      .then((user) => res.send({ updated: user }))
      .catch((err) => res.send({ error: err }));
  })
  .delete((req, res) => {
    User.deleteOne({ email: req.params.email })
      .then((user) => res.send({ deleted: user }))
      .catch((err) => res.send({ error: err }));
  });

// Note main routes using chained method
app.route("/api/note").post((req, res) => {
  const getNote = Note({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id,
  });
  // saves the user notes
  getNote
    .save()
    .then(res.send({ message: "Ok" }))
    .catch((err) => res.send({ error: err }));
});

// Note sub routes using chained method
app
  .route("/api/note/:_id")
  .get((req, res) => {
    Note.findOne({ _id: req.params._id })
      .then((notes) => res.send(notes))
      .catch((err) => res.send({ error: err }));
  })
  .patch((req, res) => {
    Note.updateOne({ _id: req.params._id }, { $set: req.body })
      .then((note) => res.send({ updated: note }))
      .catch((err) => res.send({ error: err }));
  })
  .delete((req, res) => {
    Note.deleteOne({ _id: req.params._id })
      .then((note) => res.send({ deleted: note }))
      .catch((err) => res.send({ error: err }));
  });

// Notes sub-sub routes using chained method
app
  .route("/api/notes/:user_id")
  .get((req, res) => {
    Note.find({ user_id: req.params.user_id })
      .then((notes) => res.send(notes))
      .catch((err) => res.send({ error: err }));
  })
  .delete((req, res) => {
    Note.deleteMany({ user_id: req.params.user_id })
      .then((notes) => res.send({ deleted: notes }))
      .catch((err) => res.send({ error: err }));
  });
/** API routes end */

// Port
app.listen(process.env.PORT || process.env.LOCAL_PORT, () => {
  console.log("Server running on port 5000");
});
