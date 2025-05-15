const Router = require("express").Router();

const BrandRouter = require("./BrandRoutes");
const CartRouter = require("./CartRoutes");
const CheckoutRouter = require("./CheckoutRoutes");
const ContactUsRouter = require("./ContactUsRoutes");
const MaincategoryRouter = require("./MaincategoryRoutes");
const NewsletterRouter = require("./NewsletterRoutes");
const ProductRouter = require("./ProductRoutes");
const UserRouter = require("./UserRoutes");
const WishlistRouter = require("./WishlistRoutes");

Router.use("/maincategory", MaincategoryRouter);
Router.use("/brand", BrandRouter);
Router.use("/product", ProductRouter);
Router.use("/user", UserRouter);
Router.use("/cart", CartRouter);
Router.use("/wishlist", WishlistRouter);
Router.use("/checkout", CheckoutRouter);
Router.use("/contactus", ContactUsRouter);
Router.use("/newsletter", NewsletterRouter);

module.exports = Router;
