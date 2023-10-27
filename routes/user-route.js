const router = require("express").Router();

const {
  createUser,
  updateUser,
  deleteUser,
  fetchOne,
  fetchAll,
} = require("../controllers/user-controller");
const Authorize = require("../helpers/middlewares/authorize");

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", fetchOne);
router.get("/", fetchAll);

module.exports = router;
