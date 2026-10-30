import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}

// insert
export const createBook = async(book) =>{
    const bookId = await bookModel.insert(book);
    return bookId;
}

// update
export const updateBook = async (book) => {
    return await bookModel.update(book);
}

// delete
export const deleteBook = async (id) =>{
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}