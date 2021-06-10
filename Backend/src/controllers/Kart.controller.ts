
import { Request, Response } from "express";
import { Kart } from "../interfaces/Kart";
import { connect } from "../database";


export async function createKart(req: Request, res: Response){

    const Kart : Kart = req.body;
    const conn = await connect();
    conn.query('INSERT INTO kart SET ?', Kart);
    res.json({
        message: "Kart creado"
    });
}