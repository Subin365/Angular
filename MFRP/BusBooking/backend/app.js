const express = require("express");
const bodyParser = require("body-parser"); // for parsing body
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const checkAuth = require("./middleware/check-auth");

const Passenger = require("./model/passenger");
const User = require("./model/user");
const Routelist = require("./model/routelist");
const Busdetail = require("./model/busdetail"); //for signup
const bcrypt = require("bcrypt"); //for encrypting password

const app = express();

mongoose
  .connect(
    "mongodb+srv://subin:0tKNFgzwhTGsIl95@cluster0-4trbz.mongodb.net/busBooking?retryWrites=true&w=majority"
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
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// app.post("/api/posts/signup", (req, res, next) => {
//   bcrypt.hash(req.body.password, 10).then((hash) => {
//     const user = new User({
//       email: req.body.email,
//       password: hash,
//     });

//     user
//       .save()
//       .then((result) => {
//         res.status(201).json({
//           message: "User created",
//           result: result,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           error: err,
//         });
//       });
//   });
// }); //for signing up to server and add user data

// app.post("/api/posts/login", (req, res, next) => {
//   let fetchedUserData;
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).json({
//           message: "Auth failed",
//         });
//       }
//       fetchedUserData = user;
//       return bcrypt.compare(req.body.password, user.password);
//     })
//     .then((result) => {
//       if (!result) {
//         return res.status(401).json({
//           message: "Auth failed",
//         });
//       }
//       const token = jwt.sign(
//         { email: fetchedUserData.email, userId: fetchedUserData._id },
//         "this string should be a pretty long string",
//         { expiresIn: "1hr" }
//       );
//       return res.status(200).json({
//         token: token,
//       });
//     })
//     .catch((err) => {
//       return res.status(401).json({
//         message: "Auth failed",
//       });
//     });
// }); //for authentication add package npm install --save jsonwebtoken
app.post("/api/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      dob: req.body.dob,
      gender: req.body.gender,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});

app.post("/api/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "this string should be a pretty long string",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
});
app.post("/api/passenger", (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  const passenger = new Passenger({
    name: req.body.name,
    seatNo: req.body.seatNo,
    gender: req.body.gender,
    date:req.body.date,
    regNo:req.body.regNo,
  });
  console.log("passenger:"+passenger);
  passenger.save().then((responseData) => {
    console.log(responseData);
    res.status(201).json({
      message: "post added",
      postId: responseData._id,
    });
  }); // save to db
});

app.post("/api/routelists", checkAuth, (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  const routelist = new Routelist({
    name: req.body.name,
    locations: req.body.locations,
  });
  routelist.save().then((responseData) => {
    res.status(201).json({
      message: "post added",
      postId: responseData._id,
    });
  }); // save to db
});
app.post("/api/busdetail", checkAuth, (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  const busdetail = new Busdetail({
    name: req.body.name,
    regNo: req.body.regNo,
    contactNo: req.body.contactNo,
    boardingPoint: req.body.boardingPoint,
    destinationPoint: req.body.destinationPoint,
    date_availability: req.body.date_availability,
  });
  busdetail.save().then((responseData) => {
    res.status(201).json({
      message: "post added",
      postId: responseData._id,
    });
  }); // save to db
});

app.post("/api/busdetail", checkAuth, (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  const busdetail = new Busdetail({
    name: req.body.name,
    regNo: req.body.regNo,
    contactNo: req.body.contactNo,
    boardingPoint: req.body.boardingPoint,
    destinationPoint: req.body.destinationPoint,
    date_availability: req.body.date_availability,
  });
  busdetail.save().then((responseData) => {
    res.status(201).json({
      message: "post added",
      postId: responseData._id,
    });
  }); // save to db
});

app.post("/api/busdetail/update", checkAuth, (req, res, next) => {
  //the post schema that is from the mongoose schema model. creates an id automatically
  // let seats = req.body.data.seats;
  // let index = req.body.data.index;
  // let regNo = req.body.data.regNo;
  Busdetail.updateOne({ regNo: req.body.regNo }, req.body).then((response) => {
    res.status(200).json({
      response: response,
    });
  });
  // busdetail.save().then((responseData) => {
  //   console.log(responseData);
  //   res.status(201).json({
  //     message: "post added",
  //     postId: responseData._id,
  //   });
  // }); // save to db
});

app.get(
  "/api/buslist/:boardingPoint/:destinationPoint/:date",
  checkAuth,
  (req, res, next) => {
    Busdetail.find(
      {
        boardingPoint: req.params.boardingPoint,
        destinationPoint: req.params.destinationPoint,
        'date_availability.date':req.params.date,
      },
    ).then((document) => {
      let names = [];
      document.forEach((Element) => {
        names.push({ name: Element.name, id: Element._id });
      });
      res.status(200).json({
        message: "post fetched successfully",
        busList: names,
      });
    });
  }
);

app.get("/api/busdetail/:id", checkAuth, (req, res, next) => {
  Busdetail.findOne({ _id: req.params.id }).then((document) => {
    res.status(200).json({
      message: "post fetched successfully",
      busdetail: document,
    });
  });
});

app.get("/api/routelists", checkAuth, (req, res, next) => {
  Routelist.find().then((document) => {
    res.status(200).json({
      message: "post fetched successfully",
      posts: document,
    });
  });
});
//  app.delete("/api/posts/:id", checkAuth, (req, res, next) => {
//    console.log(req.params.id);
//    Post.deleteOne({ _id: req.params.id }).then((result) => {
//      console.log(result);
//      res.status(200).json({ message: "deleted" });
//    });
//  });
module.exports = app;
