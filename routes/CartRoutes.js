const CartRouter = require("express").Router();

const {
  createRecord,
  getRecord,
  getSingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/CartControllers");
const { verifyBoth } = require("../middleware/authentication");

CartRouter.post("", verifyBoth, createRecord);
CartRouter.get("/:userid", verifyBoth, getRecord);
CartRouter.get("/single/:_id", verifyBoth, getSingleRecord);
CartRouter.put("/:_id", verifyBoth, updateRecord);
CartRouter.delete("/:_id", verifyBoth, deleteRecord);

module.exports = CartRouter;
