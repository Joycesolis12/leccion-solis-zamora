import { Aro } from "./aro";

export class Llantas {
    constructor(marca:string,modelo:string,aro:Aro){
        this._marca=marca;
        this._modelo=modelo;
        this._aro=aro;
        
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
    private _aro: Aro;
    public get aro(): Aro {
        return this._aro;
    }
    public set aro(value: Aro) {
        this._aro = value;
    }

}