const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const auth = require("../../middlewares/auth");
const { render } = require("ejs");

router.get("/pageNotFount", userController.pageNotFount);

router.get("/", userController.loadHomePage);
router.get("/shop", userController.loadShope);
router.get("/signup", auth.isLogin, userController.loadSignup);
router.post("/signup", userController.signup);
router.get("/verificationOTP", auth.isLogin, userController.loadVerifyOTP);
router.post("/verificationOTP", userController.verifyOTP);
router.post("/resendOTP", userController.resendOTP);
router.get("/login", auth.isLogin, userController.loadLogin);
router.post("/login", userController.login);
router.get("/forgotPassword", userController.loadforgotPassword);
router.post("/forgotPassword", userController.forgotPassword);
router.post("/otpValidation", userController.otpValidation);
router.post("/otpResend", userController.OtpResend);
router.get("/changePassword", userController.loadChangePass);
router.post("/changePassword", userController.changePass);
router.get("/logout", userController.logout);


router.get("/productDetails/:productId", userController.loadProductDetails);

router.get("/account", userController.loadUserAccount);
router.post("/account", userController.userAccount);
router.post("/accountChangePass", userController.accountChangePass);
router.get("/address", userController.userAddress);
router.post("/addAddress", userController.addAddress);
router.delete("/address/delete/:id", userController.deleteAddress);
router.put("/address/edit/:id", userController.editAddress);
router.get("/orders", userController.loadOrders);
router.get("/orderDetails/:id", userController.loadOrdersDetails);
router.post("/returnProduct", userController.returnProduct);
router.post("/cancelProduct", userController.cancelProduct);

router.post("/cart", userController.addCart);
router.get("/cart", userController.loadAddCart);
router.delete("/cart/remove/:id", userController.removeCartItem);
router.post("/cart/update-quantity", userController.updatequantity);

router.get("/checkout", userController.loadCheckout);
router.post("/placeOrder", userController.placeOrder);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/user/signup" }),
    userController.googleLogin
  // (req, res) => {
  //   req.session.user = true;
  //   res.redirect("/user");
  // }
);

// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/user/signUp" }),
//   userMiddleWare.storeSessionEmail,
//   userController.googleLogin
// );

module.exports = router;
