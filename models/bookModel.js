import pool from '../config/db.js';

// read
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

// insert
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book(title, author) VALUES (?,?)", 
        [book.title, book.author]
    );
    
    return result.insertId;
}

// update 
export const update = async (book) => {
    const [result] = await pool.query (
        "UPDATE book SET title= ?, author= ? WHERE id= ? ",
        [book.title, book.author, book.id]
    );
    return result.affectedRows;
}

// delete
export const remove = async (id) => {
    const [result] = await pool.query (
        "DELETE FROM book WHERE id= ? ", 
        [id]
    );
    return result.affectedRows
}