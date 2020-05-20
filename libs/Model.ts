const mysql = require('mysql');

export default class Model {

    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Al3xandra'
    }); 
    
    constructor() {}
}
