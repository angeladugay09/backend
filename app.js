import express from "express";
import bookRoutes from '../routes/bookRoutes.js';

// create express app
const app = express();

app.use('/book', bookRoutes);

try {
    const port = 3000; // define port variable here for safety 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}