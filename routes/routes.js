const express = require("express");
const router = express.Router();

//on appelle la route dans controller:
const productControl = require("../controller/products");

//on connecte la route:
router.post("/products", productControl.createProduct);

router.delete("/products/:id", productControl.deleteProduct);
router.patch("/products/:id", productControl.patchProduct);

router.get("/products", productControl.getProducts);
router.get("/products/:id", productControl.getProduct);


module.exports = router;
