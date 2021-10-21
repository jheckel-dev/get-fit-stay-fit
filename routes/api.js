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
// add to existing workout
router.put("api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body } },
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("api/wor")