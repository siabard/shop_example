const express = require('express');

const app = express();

const products = {
    product: [
        "icecream",
        "banana",
        "bread",
        "water",
        "butter"
    ],
};
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => console.log(`product_service start on ${PORT}`));