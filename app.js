//app.ts

const ProductModel = require("./model")
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/products", async(req, res)=> {
    try {
        const data = await ProductModel.find({});
        res.status(200).json({
            status:"success",
            data:data
        })
    } catch (error) {
        console.log("data fetching error");
        res.status(400).json({
            status:"fail"
        })
    }
})

app.get("/api/products/random", async(req, res)=> {
    try {
    const allProducts = await ProductModel.find({});
    for (let i = allProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
    }
    const selectedProducts = allProducts.slice(0, 6);
    res.status(200).json({ success: true, data: selectedProducts })
  } catch (error) {
    res.status(400).json({ success: false })
  }
})




app.get("/api/product/category/:category", async(req, res)=> {
    
    const category = req.params.category;
  
  
        try {
          const allProducts = await ProductModel.find({category});
          console.log("motherboards", allProducts)
          res.status(200).json({ success: true, data: allProducts })
        } catch (error) {
          res.status(400).json({ success: false })
        }
    
  
})

app.get("/api/product/:id", async(req, res)=> {
    const id = req.params.id;
        try {
          const allProducts = await ProductModel.findById(id);
          res.status(200).json({ success: true, data: allProducts })
        } catch (error) {
          res.status(400).json({ success: false })
        }
    
  
})



app.use('/api/v1', (req, res) => {
  res.send('Api home page');
});

module.exports = app;
