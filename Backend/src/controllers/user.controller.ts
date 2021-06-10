import { Request, Response } from "express";
import { User } from "../interfaces/user";
import { connect } from "../database";


export async function getUsers(req: Request, res: Response) : Promise<Response>{
    const conn = await connect();
    const Users = await conn.query('SELECT * FROM users');
    return res.json(Users[0]);
}

export async function getUser(req:Request, res:Response): Promise <Response>{
    
    const { cedula } = req.params;
    const conn = await connect();
    const User = await conn.query('SELECT * FROM users WHERE id = ?', [cedula]);
    return res.json(User[0]);
} 

export async function deleteUser(req:Request, res:Response): Promise <Response>{
    
    const { cedula } = req.params;
    const conn = await connect();
    console.log(cedula);
    await conn.query('DELETE FROM users WHERE id = ?', [cedula]);
    return res.json({mesage: "User eliminado"});

} 

export async function updateUser(req:Request, res:Response): Promise <Response>{
    
    const { cedula } = req.params;
    const User : User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE id = ?', [User, cedula]);
    return res.json({
        mesage: "User actualizado"
    });
} 