import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) =>{
    const students = await studentService.fetchAllStudents();
    res.status(200).json(students);
}

export const createStudent = async (req, res) =>{
    console.log(req);
    const {name, program} = req.body;
    const student = {name, program};
    
    try{
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}