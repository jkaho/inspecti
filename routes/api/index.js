const router = require("express").Router();
const userRoutes = require("./user");
// const authenticationRoute = require("./authentication");

router.use("/user", userRoutes);
// router.use("/user", authenticationRoute);

module.exports = router;