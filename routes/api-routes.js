const router = require("express").Router();
const Workout = require("../models/workout.js");

// retrieves your last workout
router.get("api/workouts", (req, res) => {
    db.Workout.find({})
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
    db.Workout.findByIdAndUpdate(
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
// routes to stats page
router.get("api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(7)
    .populate("exercises")
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    })
})
// creates a workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
})
module.exports = router;