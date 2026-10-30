import express from "express";
import bookRoute from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

// create express app
const app = express();

app.use(express.json());
app.use('/book', bookRoute);
app.use('/student', studentRoute);

try {
    const port = 3000; // define port variable here for safety 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}