const taskModel = require("../models/task-model");
const _ = require("lodash");

const TaskCtrl = {
  picktask(task) {
    return _.pick(task, [
      "taskId",
      "taskName",
      "taskDescription",
      "Priority",
      "Duedate",
      "Status",
    ]);
  },

  createTask(req, res) {
    const task = req.body;
    const { email } = req.query;

    // Add the user's email to the task data
    task.email = email;

    new taskModel(task)
      .save()
      .then((result) => {
        res.status(201).send({ message: "Task created", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: "Could not create the task", error: err });
      });
  },

  updateTask(req, res) {
    const task = req.body;
    const { id } = req.params; // Change from req.query to req.params

    taskModel
      .updateOne({ _id: id }, task)
      .then((result) => {
        if (!result) throw new Error("Task is not available!");
        res.status(200).send({ message: "Task Updated", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "Could not update the task", error: err });
      });
  },

  deleteTask(req, res) {
    const { id } = req.params; // Change from req.query to req.params

    taskModel
      .deleteOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "Task Deleted", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "Could not delete the task", error: err });
      });
  },

  fetchOneTask(req, res) {
    const { id } = req?.params;

    const { email } = req.params; // Change from req.query to req.params

    taskModel
      .findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "Task Record", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "The task is not available", error: err });
      });
  },

  fetchAllTasks(req, res) {
    const { email } = req.query;

    taskModel
      .find({ email: email })
      .then((result) => {
        res.status(200).send({ message: "Task List", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "The tasks are not available", error: err });
      });
  },
};

module.exports = TaskCtrl;
