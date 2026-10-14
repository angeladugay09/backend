import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const students = await studentModel.fetch();
    return students;
}