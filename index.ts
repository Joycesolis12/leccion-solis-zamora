import { Moto } from "./moto";
import { Motor } from "./motor";
import { Llantas } from "./llantas";
import { Aro } from "./aro";

const aroYamaha = new Aro("Bridgstone", "185/70R14 88T");
const llantasYamaha = new Llantas("Bridgestone", "265 65r17", aroYamaha);
const motorYamaha = new Motor("Yamaha", "WR450F WR 450 05");
const yamaha=new Moto("Yamaha","Deportivas", motorYamaha, llantasYamaha, 2);
console.log(yamaha.imprimir());


const Honda=new Moto("Honda","Deportiva",motorYamaha,llantasYamaha,2);
console.log(Honda.imprimir());
