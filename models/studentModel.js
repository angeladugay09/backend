import pool from '../config/db.js';

// read
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
};

// insert
export const insert = async (student) => {
    const [result] = await pool.query(
        "INSERT INTO student(name, program) VALUES (?,?)", 
        [student.name, student.program]
    );
    
    return result.insertId;
}