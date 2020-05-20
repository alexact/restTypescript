import Model from '../libs/Model';
import Beast from './Beast';


export default class Beyblade{

    id: number | null = null;
    name: string;
    power: number;
    speed: number;
    force: number;
    beast: Beast;
    user: string;


    constructor(name:string, power:number,speed: number,force: number, beast: Beast, user: string ){
        this.name = name;
        this.power = power;
        this.speed = speed;
        this.force = force;
        this.beast = beast;
        this.user = user;
    }

    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(){
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getPower(){
        return this.power;
    }

    setPower(power:number){
        this.power = power;
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed:number){
        this.speed = speed;
    }

    getForce(){
        return this.force;
    }

    setForce(force:number){
        this.force = force;
    }

    getUser(){
        return this.user;
    }

    setUser(user:string){
        this.user = user;
    }
}