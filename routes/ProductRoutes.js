const ProductRouter = require("express").Router();
const { productUploader } = require("../middleware/fileUploader");

const {
  createRecord,
  getRecord,
  getSingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/ProductControllers");
const { verifyAdmin } = require("../middleware/authentication");

ProductRouter.post("", productUploader.array("pic"), createRecord);
ProductRouter.get("", getRecord);
ProductRouter.get("/:_id", getSingleRecord);
ProductRouter.put(
  "/:_id",
  verifyAdmin,
  productUploader.array("pic"),
  updateRecord
);
ProductRouter.delete("/:_id", verifyAdmin, deleteRecord);

module.exports = ProductRouter;
