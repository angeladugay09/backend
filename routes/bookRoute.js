import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoute = express.Router();

bookRoute.get('/', bookController.fetchAllBooks);
bookRoute.post('/', bookController.createBook);
bookRoute.put('/:id', bookController.editBook);
bookRoute.delete('/:id', bookController.deleteBook);

export default bookRoute;