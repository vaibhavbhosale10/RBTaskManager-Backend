const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const taskSchema = new mongoose.Schema({
  taskId: Number,
  email: { type: String, required: true },
  taskName: { type: String, minlength: 3, maxlength: 45, required: true },
  taskDescription: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  Priority: {
    type: String,
    unique: false,
  },
  Duedate: { type: Date, required: true },
  Status: { type: String, required: true },
});

module.exports = mongoose.model("tasks", taskSchema);
taskSchema.plugin(autoIncrement, { inc_field: "taskId" });
