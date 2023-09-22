export class Motor {
    constructor(marca:string,modelo:string){
        this._marca=marca;
        this._modelo=modelo;
       

    }
    private _modelo: string;
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }
    private _marca: string;
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
}