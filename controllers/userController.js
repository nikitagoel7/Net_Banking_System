/*
Name: Nikita Goel
Date: 3rd December, 2022
Description: This file is setting controller for all the user routes(Creating, updating and deleting users)
*/
const User = require('./../model/userModel');

exports.createUser = async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password // this needs to be changed

  });

  res.status(201).json({
    status: 'success',
    data: newUser
   
  });
};

exports.deleteMe = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

// commented the code as it is not in the requirements 
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  // SEND RESPONSE
  res.status(200).json({
     status: 'success',
     results: users.length,
     users
   });
 };