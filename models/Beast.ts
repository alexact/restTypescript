export default class Beast{
    name: string;
    type: string;

    constructor(name:string, type:string){
        this.name=name;
        this.type=type;
    }

    getName(){
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getType(){
        return this.type;
    }

    setType(type:string){
        this.type = type;
    }
}