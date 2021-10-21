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

WorkoutSchema.virtual("totalDuration").get(function () {
    let counter = 0;
    for (i=0; i<this.exercises.length; i++){
        counter = counter+this.exercises[i]["duration"]
    }
    return coounter;
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

// TODO: add exercise name, distance, weight, sets, reps, length of time
// turn to JSON
// length of total workout?
// export