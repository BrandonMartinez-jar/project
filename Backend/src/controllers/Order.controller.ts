import { Request, Response } from "express";
import { Orders } from "../interfaces/Order";
import { connect } from "../database";


export async function getOrders(req: Request, res: Response) : Promise<Response>{
    const conn = await connect();
    const Orders = await conn.query('SELECT * FROM Orders');
    return res.json(Orders[0]);
}

export async function createOrder(req: Request, res: Response){

    const Order : Orders = req.body;
    const conn = await connect();
    conn.query('INSERT INTO Orders SET ?', Order);
    res.json({
        message: "Pedido realizado"
    });
}

export async function getOrder(req:Request, res:Response): Promise <Response>{
    
    const { id } = req.params;
    const conn = await connect();
    const Order = await conn.query('SELECT * FROM Orders WHERE id = ?', [id]);
    return res.json(Order[0]);
} 

export async function deleteOrder(req:Request, res:Response): Promise <Response>{
    
    const { id } = req.params;
    const conn = await connect();
    await conn.query('DELETE FROM Orders WHERE id = ?', [id]);
    return res.json({mesage: "Pedido eliminado"});

} 
