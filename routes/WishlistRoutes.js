const WishlistRouter = require("express").Router();

const {
  createRecord,
  getRecord,
  getSingleRecord,
  // updateRecord,
  deleteRecord,
} = require("../controllers/WishlistControllers");
const { verifyBoth } = require("../middleware/authentication");

WishlistRouter.post("", verifyBoth, createRecord);
WishlistRouter.get("/:userid", verifyBoth, getRecord);
WishlistRouter.get("/single/:_id", verifyBoth, getSingleRecord);
// WishlistRouter.put("/:_id", updateRecord);
WishlistRouter.delete("/:_id", verifyBoth, deleteRecord);

module.exports = WishlistRouter;
