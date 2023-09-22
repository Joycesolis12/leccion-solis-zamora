import { Llantas } from "./llantas";
import { Motor } from "./motor";

export class Moto {
    constructor(marca:string,modelo:string,motor:Motor,llantas:Llantas,numeroLlantas:number){
        this._marca=marca;
        this._modelo=modelo;
        this._motor=motor;
        this._llantas=llantas;
        this._numeroLlantas=numeroLlantas;

    }

    private _marca: string;
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    private _modelo: string;
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }
    private _motor: Motor;
    public get motor(): Motor {
        return this._motor;
    }
    public set motor(value: Motor) {
        this._motor = value;
    }
    private _llantas: Llantas;
    public get llantas(): Llantas {
        return this._llantas;
    }
    public set llantas(value: Llantas) {
        this._llantas = value;
    }
    private _numeroLlantas: number;
    public get numeroLlantas(): number {
        return this._numeroLlantas;
    }
    public set numeroLlantas(value: number) {
        this._numeroLlantas = value;
    }
    public imprimir():string{
        return (
            `La nueva versiòn mejorada de la moto ${this._marca} con modelo "${this._modelo}" cuenta con un motor de marca ${this._motor.marca} y con ${this._numeroLlantas} llantas de marca ${this._llantas.marca} y modelo "${this._llantas.modelo}"`
        );
    }

}