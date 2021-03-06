const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const models = require("../models");
const Faculty = models.Faculty;

const {populateDashboard} = require("../services/db/getStudents");

////
//Routes
////
let onIndex = (req, res) => {
  if (req.user) {
    populateDashboard(req.user._id).then(dashboard => {
      res.render("home", {dashboard, user: req.user});
    });
  } else {
    res.redirect("/login");
  }
};

let onLoggedInVisit = (req, res) => {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};

let onLogout = (req, res) => {
  req.logout();
  res.redirect("/login");
};

router.get("/", onIndex);
router.get("/login", onLoggedInVisit);
router.get("/logout", onLogout);

module.exports = router;
