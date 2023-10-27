const router = require("express").Router();
const {
  adminLogin,
  validateToken,
  refreshToken,
} = require("../controllers/admin-auth");

router.post("/admin", adminLogin);
router.post("/validate-token", validateToken);
router.post("/refresh-token", refreshToken);

module.exports = router;
