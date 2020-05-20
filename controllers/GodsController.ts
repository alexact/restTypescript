import { Request, Response } from "express"
import GodsService from "../services/GodsService"
import * as PokeController from "./PokeController";
import God from "../models/God";

/**
 * Retorna todos los dioses de la base de datos
 * 
 * @param req: Request => petición de express
 * @param res: Response => respuesta de express
 */
export async function gods(req: Request, res: Response) {
    const gods: any = await GodsService.getAll();
    res.status(200).json(gods);
}

export async function godByName(req: Request, res: Response) {
    const gods: any = await GodsService.getByName(req.params.name);
    
    res.status(200).json(gods);
}

export function create(req: Request, res: Response) {
    const gods = GodsService.create(req.body.name, req.body.origin);
    res.status(200).json(gods);
}

export async function update(req: Request, res: Response) {
    const gods = await GodsService.getByName(req.body.name)
    GodsService.update(req.body.name, req.body.origin);
    
    res.status(200).json("Actualizado");
}

export async function del(req: Request, res: Response) {
    const gods: any = await GodsService.getByName(req.params.name);
    console.log("Entro");
    let result=null;
    if (gods != null){
        result= await GodsService.erase(gods[0].id);
    }
    res.status(200).json(result);
}

export async function PokeByName(req: Request, res: Response) {
    const gods: any = await GodsService.getByName(req.params.name);
    let poke=null;
    if (gods != null){
        console.log("dios que se llamo",gods[0].id)
        poke= await PokeController.pokerById(gods[0].id);
    }
    res.status(200).json("El pokemon de tu dios "+gods[0].name+" es "+poke.forms[0].name);
}

