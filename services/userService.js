import * as userModel from '../models/userModel.js';
import ValidationError from '../utils/ValidationError.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const doesUserExist = async(email) =>{
    const existing = await userModel.findUserByEmail(email);

    if(existing.length > 0){
        return {result: true, user: existing[0]};
    }

    return {result: false, user: undefined};
}

// create account
export const createAccount = async(user) =>{
    if(!user.name || !user.email || !user.password) {
        throw new ValidationError('Name, Email and Password are required!', 400);
    }   

    if(!validator.isEmail(user.email)){ 
        throw new ValidationError('Improper email format. Please provide a valid email address!', 400);
    }

    if(!validator.isStrongPassword(user.password)){
        throw new ValidationError('Password is not strong enough.', 400);
    }

    const existing = await doesUserExist(user.email);

    if(existing.result){
        throw new ValidationError('An account with this email already exists!', 400);
    }

    // generate salt
    const salt =  bcrypt.genSaltSync(10); // paghaba ng salt, paghirap ma-decode. disadvantage: paghaba ng salt, pag tagal ng process
    const hashedPassword = bcrypt.hashSync(user.password, salt); 

    const result = await userModel.insert(user.name, user.email, hashedPassword);

    if(!result || result <= 0){
        throw new Error('Unable to create account. Please try again later.');
    }

    return  'Account created successfully!';
}

// to login
export const login = async(user) =>{
    if(!user.email || !user.password) {
        throw new ValidationError('Email and Password are required!', 400);
    }
    
    const existing = await doesUserExist(user.email);

    if(!existing.result){
        throw new ValidationError('An account with this email does not exist!', 400);
    }

    const isCorrectPassword = await bcrypt.compare(user.password, existing.user.password);
    
    if(!isCorrectPassword){ // validation only exist inside the IF statement, if false
        throw new Error('Incorrect password!');
    }

    return 'Login successfully!';
}