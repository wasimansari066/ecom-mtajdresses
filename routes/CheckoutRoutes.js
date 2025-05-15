const CheckoutRouter = require("express").Router();

const {
  createRecord,
  getRecord,
  getSingleRecord,
  updateRecord,
  deleteRecord,
  order,
  verifyOrder,
} = require("../controllers/CheckoutControllers");
const { verifyBoth, verifyAdmin } = require("../middleware/authentication");

CheckoutRouter.post("", verifyBoth, createRecord);
CheckoutRouter.get("", verifyAdmin, getRecord);
CheckoutRouter.get("/user/:userid", verifyBoth, getRecord);
CheckoutRouter.get("/single/:_id", verifyBoth, getSingleRecord);
CheckoutRouter.put("/:_id", verifyBoth, updateRecord);
CheckoutRouter.delete("/:_id", verifyBoth, deleteRecord);
CheckoutRouter.post("/order", verifyBoth, order)
CheckoutRouter.post("/verify", verifyBoth, verifyOrder)

module.exports = CheckoutRouter;
