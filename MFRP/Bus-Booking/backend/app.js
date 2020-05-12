const express = require("express");
const bodyParser = require("body-parser"); // for parsing body
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const checkAuth = require("./middleware/check-auth");

const Post = require("./model/post");
const User = require("./model/user"); //for signup
const bcrypt = require("bcrypt"); //for encrypting password

const app = express();

mongoose
  .connect(
    "mongodb+srv://subin:0tKNFgzwhTGsIl95@cluster0-4trbz.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch(() => {
    console.log("connection failed");
  }); //to connect to db
app.use(bodyParser.json()); //to user bodyparser package

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });

    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
}); //for signing up to server and add user data

app.post("/api/posts/login", (req, res, next) => {
  let fetchedUserData;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUserData = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: fetchedUserData.email, userId: fetchedUserData._id },
        "this string should be a pretty long string",
        { expiresIn: "1hr" }
      );
      return res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
}); //for authentication add package npm install --save jsonwebtoken

app.post("/api/posts", checkAuth, (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((responseData) => {
    console.log(responseData);
    res.status(201).json({
      message: "post added",
      postId: responseData._id,
    });
  }); // save to db
});
app.get("/api/posts", (req, res, next) => {
  Post.find().then((document) => {
    console.log(document);
    res.status(200).json({
      message: "post fetched successfully",
      posts: document,
    });
  });
});
app.delete("/api/posts/:id", checkAuth, (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "deleted" });
  });
});
module.exports = app;
