import { Request, Response } from "express";
import { Product } from "../interfaces/product";
import { connect } from "../database";


export async function getProducts(req: Request, res: Response) : Promise<Response>{
    const conn = await connect();
    const products = await conn.query('SELECT * FROM products');
    return res.json(products[0]);
}

export async function createProduct(req: Request, res: Response){

    const product : Product = req.body;
    const conn = await connect();
    conn.query('INSERT INTO products SET ?', product);
    res.json(product);
}

export async function getProduct(req:Request, res:Response): Promise <Response>{
    
    const { id } = req.params;
    const conn = await connect();
    const product = await conn.query('SELECT * FROM products WHERE id = ?', [id]);
    return res.json(product[0]);
} 

export async function deleteProduct(req:Request, res:Response): Promise <Response>{
    
    const { id } = req.params;
    const conn = await connect();
    await conn.query('DELETE FROM products WHERE id = ?', [id]);
    return res.json({mesage: "Producto eliminado"});

} 

export async function updateProduct(req:Request, res:Response): Promise <Response>{
    
    const { id } = req.params;
    const product : Product = req.body;
    const conn = await connect();
    console.log(id);
    await conn.query('UPDATE products SET ? WHERE id = ?', [product, id]);
    return res.json({
        mesage: "Producto actualizado"
    });
} 