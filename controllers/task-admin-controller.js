const TaskModel = require("../models/task-model");

const TaskCtrladmin = {
  picktaskAdmin(task) {
    return _.pick(task, [
      "taskName",
      "taskDescription",
      "email",
      "DueDate",
      "Status",
      "Priority",
    ]);
  },

  createTaskAdmin(req, res) {
    const task = req.body;

    new TaskModel(task)
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ message: "task created by admin", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: "Could not created the task", error: err });
      });
  }, //createContact

  updateTaskAdmin(req, res) {
    const task = req.body;
    const { id } = req?.params;

    TaskModel.updateOne({ _id: id }, contact).then((result) => {
      if (!result) throw new Error("task is not available!");
      res
        .status(200)
        .send({ message: "Contact Updated", data: result })
        .catch((err) => {
          console.error(err);
          res
            .status(404)
            .send({ message: "Could not updated the task", error: err });
        });
    });
  }, //updateContact

  deletetaskAdmin(req, res) {
    const { id } = req?.params;

    TaskModel.deleteOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "task Deleted", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "Could not delete the task", error: err });
      });
  }, //deletetask

  fetchOneTaskAdmin(req, res) {
    const { id } = req?.params;

    TaskModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "task Record", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "The task is not available", error: err });
      });
  }, //fetchOnetask admin

  fetchAllTaskadmin(req, res) {
    TaskModel.find()
      .then((result) => {
        res.status(200).send({ message: "Contacts List", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "The contacts are not available", error: err });
      });
  }, //fetchAll
};

module.exports = TaskCtrladmin;
