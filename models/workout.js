const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        duration: {
            type: Number
        }
}]
},
{
    toJSON: {
        virtuals: true
    }
});



// TODO: add exercise name, distance, weight, sets, reps, length of time
// turn to JSON
// length of total workout?
// export