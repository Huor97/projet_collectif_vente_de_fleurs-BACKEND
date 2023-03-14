const Product = require("../models/Products");

//on détermine (en asynchrone) et on export la fonction dans routes.js:
exports.createProduct = async (req, res) => {
  try {
    //destructuring:
    const { name, description, images, price, size, category } = req.body;
    //nouveau produit:
    const newProduct = new Product({
      name: name,
      description: description,
      images: images,
      price: price,
      size: size,
      category: category,
    });
    await newProduct.save();

    res.status(201).json("Product created !");
  } catch (error) {
    res.status(400).json("Failed : ", error);
  }
};
