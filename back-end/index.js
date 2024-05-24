const port = 8080;
const express = require('express');
//Here I use express for creating our app instance

const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');//jwt:JSON Web Tokens: handles user authentication and authorization by verifying JWT tokens.
const multer = require('multer'); //multer simplifies handling file uploads from users to your server.
const path = require('path'); // Using this path I can  get access to our backend directory in our express app.
const cors = require('cors');


app.use(express.json()); // With the help of this express.json whatever request we will get from response, it will be automatically pass through json.
app.use(cors()); // It will connect our reactJS project will connect to  express app on 8000 port.


// Here I am connecting to my mongoDB database.
mongoose.connect('mongodb+srv://19jzbcs0106:19jzbcs@cluster0.h4lxmec.mongodb.net/ecommerce');

//API Creation

app.post('/', (req, res) => {
    res.send('Express App is Running');
})


//Image storage 

const storage = multer.diskStorage({
    destination:  './upload/images',
    filename: (req, file, cb) => {
        return cb(null,`${file.filename}_${Date.now()} ${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage});

//Create Upload Endpoint for Images
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'),(req,res) => { // product is field name
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//sehcma for creating product
const Product = mongoose.model('Product',{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true, 
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req, res) =>{
    let products = await Product.find({}); 
    let id;
    if(products.length > 0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();   //for save in database using await
    console.log('Saved');
    res.json({
        success: true,
        name: req.body.name,
    });
})

//Creating API for deleting products

app.post('/removeproduct',async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log('Removed');
    res.json({
        success: true,
        name: req.body.name,
    });
})

//Creating API getting all Products

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log('All Products Fetched');
    res.send(products);
})

//As Our Image will uploaded in endpoint using POST Method, and  on that sametime multer DiskStorage change/rename the name of product with new   



//Schema creating for user model

const Users = mongoose.model('users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique:true,
    },
    password: {
        type: String,
    },
    category: {
        type: Object,
    },
    date: {
        type: Date,
        default:Date.now,
    }
})

//Creating API for Registering User
app.post('/signup', async (req, res) => {

    let check = await Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success:false,errors:'existing user found with same email address'})
    }
    let cart = {};
    for (let i = 0; i<300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        category:cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id,
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})


//Creating endpoint for user Login
app.post('/login',async(req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare  = req.body.password  === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true,token});
        }
        else {
            res.json({success:false,errors:'Wrong Password'});
        }

    }
    else {
        res.json({success:false,errors:'User not found'});
    }
})


app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on Port", port);
    }
    else {
        console.log("Error in running the server", error);
    }
})