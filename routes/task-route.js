const router = require("express").Router();
const {
  createTask,
  updateTask,
  deleteTask,
  fetchOneTask,
  fetchAllTasks,
} = require("../controllers/task-controller");

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.get("/:email", fetchOneTask);

router.get("/", fetchAllTasks);

module.exports = router;
