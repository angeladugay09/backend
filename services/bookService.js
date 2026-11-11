import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}

const doesBookExist = async(book) =>{
    let existing;
    if(Object.hasOwn(book, "id")){
        existing = await bookModel.findBookById(book.id); // update
    }else{
        existing = await bookModel.findBookByTitleAndAuthor(book.title, book.author); // create
    }
    
    if(existing.length > 0){
        return true;
    }

    return false;
}

// insert
export const createBook = async(book) =>{
    if(!book.title || !book.author){ // evaluate if the title and author is empty or not
        // blocking code
        throw new Error('Title and Author are required!');
    }

    const existing = await doesBookExist(book);

    if(existing){
        throw new Error('Book already exist!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
}

// update
export const updateBook = async (book) => {
    if(!book.title || !book.author){ 
        throw new Error('Title and Author are required!');
    }

    const existing = await doesBookExist(book);

    if(!existing){
        throw new Error('Book does not exist!');
    }

    const updatedBook = await bookModel.update(book);
    return updatedBook;
}

// delete
export const deleteBook = async (id) =>{
    const book = {id};

    const existing = await doesBookExist(book);

    if(!existing){
        throw new Error('Book does not exist!');
    }

    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}