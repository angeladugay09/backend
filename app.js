import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

// create express app
const app = express();

app.use(express.json());
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000; // define port variable here for safety 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}

// 127.0.0.1:3000/book/
// 192.168.192.174 Sir
