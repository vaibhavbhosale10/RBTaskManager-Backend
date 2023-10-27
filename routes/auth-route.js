const router = require("express").Router();

const {
  userLogin,
  validateToken,
  refreshToken,
} = require("../controllers/auth-controller");

router.post("/signup", userLogin);
router.post("/validate-token", validateToken);
router.post("/refresh-token", refreshToken);

module.exports = router;
