import mongoose from "mongoose";
import validator from "validator";

const {Schema, model, models} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    password: {
        type: String,
        required: [true, "Password required"],
        trim: true,
        minLength: [6, "Password must be at least 6 chars"]
    },
    firstName: {
        type: String,
        trim: true,
        default: ""
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});

const User = models.User || model('User', userSchema);

module.exports = User;