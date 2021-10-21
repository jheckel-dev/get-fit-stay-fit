const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{}]
})



// TODO: add exercise name, distance, weight, sets, reps, length of time
// turn to JSON
// length of total workout?
// export