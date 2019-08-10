module.exports = app => {
  const userController = require("../controller/userController");
  const brandController = require("../controller/brandController");
  const woodController = require("../controller/woodController");
  const productController = require("../controller/productController");

  const { auth } = require("../middleware/auth");
  const { admin } = require("../middleware/admin");

  /** USER ROUTES */
  app.route("/api/users/auth").get(auth, userController.userAuth);

  app.route("/api/users/register").post(userController.userRegister);

  app.route("/api/users/login").post(userController.userLogin);

  app.route("/api/user/logout").get(auth, userController.userLogout);

  /** BRAND ROUTES */
  app.route("/api/product/brand").post(auth, admin, brandController.postBrand);

  app.route("/api/product/brands").get(brandController.getBrands);

  /** WOOD ROUTES */
  app.route("/api/product/wood").post(auth, admin, woodController.postWood);

  app.route("/api/product/woods").get(woodController.getWoods);

  /** PRODUCT ROUTES */
  app.route("/api/product/articles").get(productController.getArticles);

  app
    .route("/api/product/article")
    .post(auth, admin, productController.postArticle);

  app
    .route("/api/product/articles_by_id")
    .get(productController.getArticlesById);
};
