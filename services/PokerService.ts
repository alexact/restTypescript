const fetch = require("node-fetch");

const url = "https://pokeapi.co/api/v2/";

module PokeServive{

export function prueba(id: number) :Promise<any>{
    let urlPoke = url+'/pokemon/'+id;
    const getPoke = new Promise((resolve, reject)=>{
        const response =  fetch(urlPoke);
        resolve(response.json());
        reject(fetch(urlPoke).catch((err: any) => console.error(err)));
    });
    return getPoke
   
}


export async function getPokeApi(id:number){
    let getPoke=null;
    let urlPoke = url+'/pokemon/'+id;
    await fetch(urlPoke)
        .then((res: any) => res.json())
        .then((json: any) => getPoke=json);
    return getPoke;
}
}
export default PokeServive;




