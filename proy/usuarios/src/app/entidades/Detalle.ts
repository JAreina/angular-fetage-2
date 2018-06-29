import { Producto } from "./Producto";


export class Detalle {

    constructor(public cantidad  :number = undefined,
                public precio    :number = null,
                public fecha     :string = null,
                public producto  :Producto = null
                
                ){
    }

}