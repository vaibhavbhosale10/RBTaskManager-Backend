const router = require("express").Router();

const {
  createTaskAdmin,
  updateTaskAdmin,
  deletetaskAdmin,
  fetchOneTaskAdmin,
  fetchAllTaskadmin,
} = require("../controllers/task-admin-controller");

router.post("/", createTaskAdmin);
router.put("/:id", updateTaskAdmin);
router.delete("/:id", deletetaskAdmin);
router.get("/:id", fetchOneTaskAdmin);
router.get("/", fetchAllTaskadmin);

module.exports = router;
