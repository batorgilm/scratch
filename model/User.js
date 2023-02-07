const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("newses", {
  ref: "News",
  localField: "_id",
  foreignField: "user",
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
