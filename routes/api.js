const router = require("express").Router();
const Workout = require("../models/workout.js");

// retrieves your last workout
router.get("api/workouts", (req, res) => {
    Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(message);
    })
})