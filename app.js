import express from "express";
import cors from 'cors';
import bookRoute from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';
import userRoute from './routes/userRoutes.js';

let corsOptions = {
    origin: 'http://localhost:5173',
}; 

// create express app
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/book', bookRoute);
app.use('/student', studentRoute);
app.use('/user', userRoute);

try {
    const port = 3000; // define port variable here for safety 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}