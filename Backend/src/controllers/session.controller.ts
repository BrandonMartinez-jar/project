import { Request, Response } from "express";
import { User } from "../interfaces/user";
import { connect } from "../database";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export async function signup(req: Request, res: Response): Promise<Response>{

    const User : User = req.body;
    
    User.password = await bcrypt.hash(User.password, await bcrypt.genSalt(10));

    const conn = await connect();
    conn.query('INSERT INTO users SET ?', User);

    const token : string = jwt.sign({id: User.id}, process.env.TOKEN_SECRET || 'mm token?');

    return res.header('token', token).json({
        message: "Usuario registrado correctamente"
    });

}

export async function signin(req:Request, res:Response): Promise <Response>{

    const { email, password} = req.body;
    
    const conn = await connect();

    const Password = await conn.query('SELECT password FROM users WHERE email = ?', [email]);
    
    if(Password){
        
        if(bcrypt.compare(password, JSON.stringify(Password))){
            
            const id = await conn.query('SELECT id FROM users WHERE email = ?', [email]);
            
            const token : string = jwt.sign({_id: id}, process.env.TOKEN_SECRET || 'mm token?');
            
        return res.header('token', token).status(200).json('Sesion iniciada correctamente');

        }else{
            return res.status(400).json('Password incorrect');
        }

    }else{
        return res.status(400).json('Email incorrect');
    }
} 
