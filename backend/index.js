const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello there...");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});


// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/Demo/', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         const inventorySchema = new mongoose.Schema({
//             item: String,
//             qty: Number
//             // add more fields as needed
//         });

//         const inventory = mongoose.model('inventory', inventorySchema);

//         const data = await inventory.find();

//         console.warn(data);
//     } catch (error) {
//         console.error('Failed to connect to MongoDB:', error);
//     }
// };

// connectDB();

// app.listen(5000);
