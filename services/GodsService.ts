import God from "../models/God";

const { db } = require('../conf');

module GodsService {
    export function get(id: number): God {
        const god = db.gods.filter((el: God) => {
            return el.id == id;
        })
        return god;
    }

    export function getByName(name: string):Promise<any> {
        let result = new Promise((resolve, reject) => {
            God.dbc.query("SELECT * from rest.god WHERE name ='"+ name+"'", (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });
        
        return result;
    }

    export function getAll(): Promise<any> {

        let result = new Promise((resolve, reject) => {
            God.dbc.query('SELECT * from rest.god', (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });
        return result;
    }

    export function create(name: string, origin: string): God {
        const god = new God(name, origin);
        let godNew : string = "INSERT INTO rest.god (name, origin) VALUES ('"+name+"','"+origin+"')";
        console.log(godNew);
        God.dbc.query(godNew)
       return god
    }

    export function update(name: string, origin: string): God {
        const god = new God(name, origin);
        let godUpdate : string = "UPDATE  rest.god SET name='"+name+"', origin='"+origin+"' WHERE name='"+name+"'";
        console.log(godUpdate);
        God.dbc.query(godUpdate)
       return god
    }

    export function erase(id: number):  Promise<any> {
        let godDelete : string = "DELETE FROM  rest.god WHERE id='"+id+"'";
        let result = new Promise((resolve, reject) => {       
        God.dbc.query(godDelete, (err: any, rows: any, fields: any) => {
            if (err) { reject(err); }
            resolve(rows);
        });
    });
    return result;
    }
}

export default GodsService;
