module.exports = app => {
  const userController = require("../controllers/userController");
  const brandController = require("../controllers/brandController");
  const woodController = require("../controllers/woodController");

  /** USER ROUTES */
  app.route("/api/users/auth").get(userController.userAuth);

  app.route("/api/users/register").post(userController.userRegister);

  app.route("/api/users/login").post(userController.userLogin);

  app.route("/api/users/logout").post(userController.userLogout);

  /** BRAND ROUTES */
  app.route("/api/product/brand").post(brandController.postBrand);

  app.route("/api/product/brands").get(brandController.getBrands);

  /** WOOD ROUTES */
  app.route("/api/product/wood").post(woodController.postWood);

  app.route("/api/product/woods").get(woodController.getWoods);

  /** PRODUCT ROUTES */
  app.route("/api/product/articles").get(productController.getArticles);

  app.route("/api/product/article").post(productController.postArticle);

  app
    .route("/api/product/articles_by_id")
    .post(productController.getArticlesById);
};
