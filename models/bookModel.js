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