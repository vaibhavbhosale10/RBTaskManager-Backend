const router = require("express").Router();

const {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  fetchOneAdmin,
  fetchAllAdmin,
} = require("../controllers/admin-controller");
const Authorize = require("../helpers/middlewares/authorize");

router.post("/", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);
router.get("/:id", fetchOneAdmin);
router.get("/", fetchAllAdmin);

module.exports = router;
