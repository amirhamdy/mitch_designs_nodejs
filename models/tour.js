const mongoose = require('mongoose');

const Tour = mongoose.model('Tours', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    rating: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 5
    },
    agency: {
        type: {
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            },
            email: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255,
                unique: true
            },
            plan: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            }
        },
        required: true,
    },
    days: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    mealPlan: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    featuredImg: {
        type: {
            small: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            },
            large: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            }
        },
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 2048
    },
}));

exports.Tour = Tour;