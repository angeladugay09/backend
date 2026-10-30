import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const students = await studentModel.fetch();
    return students;
}

// insert
export const createStudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
}

// update
export const updateStudent = async (student) => {
    return await studentModel.update(student);
}

// delete
export const deleteStudent = async(id) =>{
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}