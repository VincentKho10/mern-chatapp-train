const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: {
        type: String,
        required: true
    },
    username: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
