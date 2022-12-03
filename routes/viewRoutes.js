/*
Name: Nikita Goel
Date: 3rd December, 2022
Description: This file manages all the routes containing  get requests for all the pages
*/
const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.home);
router.get('/myloanlists', viewsController.getMyLoan);
router.get('/allloanlists', viewsController.getLoan);
router.get('/createNewLoan', viewsController.CreateNewLoan);
router.get('/loanList', viewsController.getMyLoan);
router.get('/logout', viewsController.logout);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);
// router.get('/courses', viewsController.getCourse);
// router.get('/newCourse', viewsController.createNewCourse);
// router.get('/courseList', viewsController.getCoursesJSON);
//router.get('/alluserlists', viewsController.getAllUser);

module.exports = router;
