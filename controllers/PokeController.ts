import { Request, Response } from "express"
import PokerService from "../services/PokerService"

export async function pokerById(id:number) {
    const poke: any = await PokerService.getPokeApi(id);
    console.log(poke);
    return poke;
}